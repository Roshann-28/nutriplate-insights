import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RiskScoreCircle } from "@/components/RiskScoreCircle";
import {
  NutrientRadarChart,
  sampleNutrientData,
} from "@/components/NutrientRadarChart";
import { RedundancyCard } from "@/components/RedundancyCard";
import { ArrowLeft, RefreshCw, Leaf, Sparkles } from "lucide-react";

export default function Results() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedFoods = (location.state?.selectedFoods as string[]) || [];

  // Placeholder data for MVP
  const riskScore = 65;

  const redundancies = [
    {
      title: "High Grain Overlap",
      description:
        "You're eating multiple refined grains that offer similar nutrients. Consider adding whole grains for more fiber variety.",
      severity: "warning" as const,
      foods: ["Rice", "Roti", "Paratha"],
    },
    {
      title: "Limited Omega-3 Sources",
      description:
        "Your current selection lacks foods rich in Omega-3 fatty acids. This is common in vegetarian diets.",
      severity: "critical" as const,
    },
    {
      title: "Good Legume Variety",
      description:
        "You're eating different types of dal which is great for protein diversity!",
      severity: "info" as const,
      foods: ["Toor Dal", "Moong Dal"],
    },
  ];

  const suggestions = [
    {
      emoji: "🐟",
      text: "Add fish twice a week for Omega-3 and Vitamin D",
    },
    {
      emoji: "🥜",
      text: "Include walnuts or flaxseeds for plant-based Omega-3",
    },
    {
      emoji: "🥬",
      text: "Add more leafy greens for Iron and Vitamin A",
    },
    {
      emoji: "☀️",
      text: "Consider fortified foods or sunlight for Vitamin D",
    },
  ];

  if (selectedFoods.length === 0) {
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
          <RiskScoreCircle score={riskScore} />
          <p className="text-sm text-muted-foreground mt-4 max-w-sm mx-auto">
            Based on {selectedFoods.length} foods you regularly eat. Lower
            scores indicate better diversity.
          </p>
        </section>

        {/* Radar chart section */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <span>📊</span> Nutrient Coverage
          </h2>
          <div className="bg-card rounded-2xl shadow-nutri border border-border p-4">
            <NutrientRadarChart data={sampleNutrientData} />
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
            {redundancies.map((item, i) => (
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
              {suggestions.map((suggestion, i) => (
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
