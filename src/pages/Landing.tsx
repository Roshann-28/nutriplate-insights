import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, TrendingUp, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <main className="flex-1 flex flex-col">
        {/* Top decorative gradient */}
        <div className="absolute top-0 left-0 right-0 h-[60vh] bg-hero-gradient opacity-5 -z-10" />

        <div className="container flex flex-col items-center justify-center flex-1 px-6 py-12 text-center">
          {/* Logo / Brand */}
          <div className="flex items-center gap-2 mb-8 animate-fade-in-up">
            <div className="w-12 h-12 rounded-2xl bg-hero-gradient flex items-center justify-center shadow-button">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">NutriDiverse</span>
          </div>

          {/* Main headline */}
          <h1 className="text-display-lg text-foreground max-w-lg mb-6 animate-fade-in-up delay-100">
            See the Hidden Truth in Your Plate
          </h1>

          {/* Subtitle */}
          <p className="text-body-lg text-muted-foreground max-w-md mb-10 animate-fade-in-up delay-200">
            Discover if your everyday foods give you real nutritional variety—or
            if you're stuck in a hidden pattern.
          </p>

          {/* CTA Button */}
          <Button
            size="xl"
            variant="hero"
            onClick={() => navigate("/analyze")}
            className="animate-fade-in-up delay-300"
          >
            Start Analysis
            <ArrowRight className="w-5 h-5" />
          </Button>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-12 animate-fade-in-up delay-400">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-secondary-foreground">
                Quick 2-min analysis
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-secondary-foreground">
                No meal plans, just insights
              </span>
            </div>
          </div>
        </div>

        {/* Feature highlights */}
        <section className="container px-6 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                emoji: "🍛",
                title: "Indian-Focused",
                desc: "Built for dal, roti, sabzi lovers",
              },
              {
                emoji: "📊",
                title: "10 Key Nutrients",
                desc: "Protein to Omega-3, all covered",
              },
              {
                emoji: "💚",
                title: "Kind Guidance",
                desc: "Encouraging, never preachy",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-card shadow-nutri border border-border text-center animate-fade-in-up"
                style={{ animationDelay: `${400 + i * 100}ms` }}
              >
                <span className="text-4xl mb-3 block">{feature.emoji}</span>
                <h3 className="font-semibold text-foreground mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container px-6 py-6 text-center">
        <p className="text-sm text-muted-foreground">
          Made with 💚 for healthier eating habits
        </p>
      </footer>
    </div>
  );
}
