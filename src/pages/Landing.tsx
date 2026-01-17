import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, TrendingUp, Heart, LogIn, LogOut, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export default function Landing() {
  const navigate = useNavigate();
  const { user, signOut, loading } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with auth buttons */}
      <header className="container flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-hero-gradient flex items-center justify-center">
            <Leaf className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">NutriDiverse</span>
        </div>
        
        <div className="flex items-center gap-3">
          {!loading && (
            user ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-secondary">
                  <User className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-secondary-foreground max-w-[120px] truncate">
                    {user.email}
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSignOut}
                  className="gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">Sign Out</span>
                </Button>
              </div>
            ) : (
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate("/auth")}
                className="gap-2"
              >
                <LogIn className="w-4 h-4" />
                Sign In
              </Button>
            )
          )}
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col">
        {/* Top decorative gradient */}
        <div className="absolute top-0 left-0 right-0 h-[60vh] bg-hero-gradient opacity-5 -z-10" />

        <div className="container flex flex-col items-center justify-center flex-1 px-6 py-12 text-center">
          {/* Main headline */}
          <h1 className="text-display-lg text-foreground max-w-lg mb-6 animate-fade-in-up">
            See the Hidden Truth in Your Plate
          </h1>

          {/* Subtitle */}
          <p className="text-body-lg text-muted-foreground max-w-md mb-10 animate-fade-in-up delay-100">
            Discover if your everyday foods give you real nutritional variety—or
            if you're stuck in a hidden pattern.
          </p>

          {/* CTA Button */}
          <Button
            size="xl"
            variant="hero"
            onClick={() =>
              user
                ? navigate("/analyze")
                : navigate("/auth", { state: { redirectTo: "/analyze" } })
            }
            className="animate-fade-in-up delay-200"
          >
            Start Analysis
            <ArrowRight className="w-5 h-5" />
          </Button>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-12 animate-fade-in-up delay-300">
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
                style={{ animationDelay: `${300 + i * 100}ms` }}
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
