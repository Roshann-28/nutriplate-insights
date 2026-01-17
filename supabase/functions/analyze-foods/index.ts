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
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    if (!selectedFoods || selectedFoods.length === 0) {
      throw new Error("No foods provided for analysis");
    }

    console.log("Analyzing foods:", selectedFoods);

    const systemPrompt = `You are a nutrition expert analyzing dietary diversity. Given a list of foods someone regularly eats, provide:
1. A risk score (0-100) where 0 is excellent diversity and 100 is very poor diversity (monoculture risk)
2. Nutrient coverage percentages for: Protein, Iron, Fiber, Vitamin A, Vitamin C, Calcium, Zinc, Omega-3
3. Redundancy insights - patterns where similar foods overlap nutritionally
4. Personalized suggestions for improving dietary diversity

Be culturally sensitive and consider Indian dietary patterns. Provide actionable, gentle suggestions.

IMPORTANT: You must respond with valid JSON only, no markdown or extra text.`;

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

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Lovable AI error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Please add credits to continue." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      throw new Error(`AI API error: ${response.status}`);
    }

    const data = await response.json();
    console.log("AI response received");
    
    const analysisContent = data.choices[0]?.message?.content;

    if (!analysisContent) {
      throw new Error("No analysis content received from AI");
    }

    // Clean the response - remove markdown code blocks if present
    let cleanedContent = analysisContent.trim();
    if (cleanedContent.startsWith("```json")) {
      cleanedContent = cleanedContent.slice(7);
    } else if (cleanedContent.startsWith("```")) {
      cleanedContent = cleanedContent.slice(3);
    }
    if (cleanedContent.endsWith("```")) {
      cleanedContent = cleanedContent.slice(0, -3);
    }
    cleanedContent = cleanedContent.trim();

    const analysis = JSON.parse(cleanedContent);
    console.log("Analysis parsed successfully");

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
