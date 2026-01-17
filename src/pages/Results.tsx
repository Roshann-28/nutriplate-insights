import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { RiskScoreCircle } from "@/components/RiskScoreCircle";
import { NutrientRadarChart } from "@/components/NutrientRadarChart";
import { RedundancyCard } from "@/components/RedundancyCard";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { ArrowLeft, RefreshCw, Leaf, Sparkles, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { foods } from "@/data/foods";
import { toast } from "sonner";

interface NutrientData {
  nutrient: string;
  coverage: number;
}

interface Redundancy {
  title: string;
  description: string;
  severity: "critical" | "warning" | "info";
  foods?: string[];
}

interface Suggestion {
  emoji: string;
  text: string;
}

interface AnalysisResult {
  riskScore: number;
  nutrientData: NutrientData[];
  redundancies: Redundancy[];
  suggestions: Suggestion[];
}

export default function Results() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedFoodIds = (location.state?.selectedFoods as string[]) || [];
  
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);

  // Convert food IDs to food names for the AI
  const selectedFoodNames = selectedFoodIds.map(id => {
    const food = foods.find(f => f.id === id);
    return food ? food.name : id;
  });

  useEffect(() => {
    if (selectedFoodIds.length === 0) return;

    const fetchAnalysis = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const { data, error: fnError } = await supabase.functions.invoke('analyze-foods', {
          body: { selectedFoods: selectedFoodNames }
        });

        if (fnError) {
          throw new Error(fnError.message);
        }

        if (data.error) {
          throw new Error(data.error);
        }

        setAnalysis(data);
      } catch (err) {
        console.error("Analysis error:", err);
        const message = err instanceof Error ? err.message : "Failed to analyze foods";
        setError(message);
        toast.error("Analysis failed", { description: message });
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnalysis();
  }, [selectedFoodIds.join(',')]);

  if (selectedFoodIds.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <div className="text-6xl mb-4">🍽️</div>
        <h1 className="text-xl font-semibold text-foreground mb-2">
          No foods selected
        </h1>
        <p className="text-muted-foreground mb-6">
          Go back and select your regular foods to get your analysis.
        </p>
        <Button onClick={() => navigate("/analyze")}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Select Foods
        </Button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <LoadingSpinner size="lg" />
        <h1 className="text-xl font-semibold text-foreground mt-6 mb-2">
          Analyzing your diet...
        </h1>
        <p className="text-muted-foreground max-w-sm">
          Our AI is evaluating {selectedFoodNames.length} foods for nutritional diversity and monoculture risks.
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
          <AlertCircle className="w-8 h-8 text-destructive" />
        </div>
        <h1 className="text-xl font-semibold text-foreground mb-2">
          Analysis Failed
        </h1>
        <p className="text-muted-foreground mb-6 max-w-sm">
          {error}
        </p>
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => navigate("/analyze")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
          <Button onClick={() => window.location.reload()}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  if (!analysis) {
    return null;
  }

  // Transform nutrient data for radar chart
  const radarData = analysis.nutrientData.map(n => ({
    nutrient: n.nutrient,
    value: n.coverage,
    fullMark: 100,
  }));

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("/analyze")}
                className="p-2 -ml-2 rounded-xl hover:bg-secondary transition-colors tap-highlight"
              >
                <ArrowLeft className="w-5 h-5 text-foreground" />
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-hero-gradient flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-semibold text-foreground">Results</span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/analyze")}
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Redo
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 container px-4 py-8">
        {/* Score section */}
        <section className="text-center mb-10">
          <h1 className="text-xl font-semibold text-foreground mb-6">
            Your Nutritional Diversity Score
          </h1>
          <RiskScoreCircle score={analysis.riskScore} />
          <p className="text-sm text-muted-foreground mt-4 max-w-sm mx-auto">
            Based on {selectedFoodNames.length} foods you regularly eat. Lower
            scores indicate better diversity.
          </p>
        </section>

        {/* Radar chart section */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <span>📊</span> Nutrient Coverage
          </h2>
          <div className="bg-card rounded-2xl shadow-nutri border border-border p-4">
            <NutrientRadarChart data={radarData} />
            <p className="text-xs text-muted-foreground text-center mt-2">
              Higher values indicate better coverage from your food choices
            </p>
          </div>
        </section>

        {/* Redundancy insights */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <span>🔍</span> What We Found
          </h2>
          <div className="space-y-4">
            {analysis.redundancies.map((item, i) => (
              <RedundancyCard
                key={i}
                title={item.title}
                description={item.description}
                severity={item.severity}
                foods={item.foods}
              />
            ))}
          </div>
        </section>

        {/* Gentle suggestions */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Gentle Suggestions
          </h2>
          <div className="bg-primary/5 rounded-2xl border border-primary/20 p-5">
            <p className="text-sm text-muted-foreground mb-4">
              Small additions that could make a big difference:
            </p>
            <ul className="space-y-3">
              {analysis.suggestions.map((suggestion, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">
                    {suggestion.emoji}
                  </span>
                  <span className="text-sm text-foreground leading-relaxed">
                    {suggestion.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="text-center pb-8">
          <p className="text-xs text-muted-foreground max-w-sm mx-auto">
            This analysis is for educational purposes only and not a substitute
            for professional dietary advice. Consult a nutritionist for
            personalized guidance.
          </p>
        </section>
      </main>

      {/* Bottom action */}
      <div className="sticky bottom-0 bg-background/95 backdrop-blur-sm border-t border-border safe-bottom">
        <div className="container px-4 py-4">
          <Button size="lg" className="w-full" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
