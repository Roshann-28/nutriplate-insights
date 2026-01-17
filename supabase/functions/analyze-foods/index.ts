import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { selectedFoods } = await req.json();
    const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");

    if (!OPENAI_API_KEY) {
      throw new Error("OPENAI_API_KEY is not configured");
    }

    if (!selectedFoods || selectedFoods.length === 0) {
      throw new Error("No foods provided for analysis");
    }

    const systemPrompt = `You are a nutrition expert analyzing dietary diversity. Given a list of foods someone regularly eats, provide:
1. A risk score (0-100) where 0 is excellent diversity and 100 is very poor diversity (monoculture risk)
2. Nutrient coverage percentages for: Protein, Iron, Fiber, Vitamin A, Vitamin C, Calcium, Zinc, Omega-3
3. Redundancy insights - patterns where similar foods overlap nutritionally
4. Personalized suggestions for improving dietary diversity

Be culturally sensitive and consider Indian dietary patterns. Provide actionable, gentle suggestions.`;

    const userPrompt = `Analyze these foods that someone eats regularly: ${selectedFoods.join(", ")}

Respond in this exact JSON format:
{
  "riskScore": <number 0-100>,
  "nutrientData": [
    {"nutrient": "Protein", "coverage": <0-100>},
    {"nutrient": "Iron", "coverage": <0-100>},
    {"nutrient": "Fiber", "coverage": <0-100>},
    {"nutrient": "Vitamin A", "coverage": <0-100>},
    {"nutrient": "Vitamin C", "coverage": <0-100>},
    {"nutrient": "Calcium", "coverage": <0-100>},
    {"nutrient": "Zinc", "coverage": <0-100>},
    {"nutrient": "Omega-3", "coverage": <0-100>}
  ],
  "redundancies": [
    {
      "title": "<short title>",
      "description": "<explanation>",
      "severity": "<critical|warning|info>",
      "foods": ["<relevant foods from selection>"]
    }
  ],
  "suggestions": [
    {
      "emoji": "<relevant emoji>",
      "text": "<actionable suggestion>"
    }
  ]
}`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.7,
        response_format: { type: "json_object" },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenAI API error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const analysisContent = data.choices[0]?.message?.content;

    if (!analysisContent) {
      throw new Error("No analysis content received from OpenAI");
    }

    const analysis = JSON.parse(analysisContent);

    return new Response(JSON.stringify(analysis), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in analyze-foods function:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
