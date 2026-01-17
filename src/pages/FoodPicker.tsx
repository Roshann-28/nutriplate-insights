import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FoodCard } from "@/components/FoodCard";
import { CategoryFilter } from "@/components/CategoryFilter";
import { SearchBar } from "@/components/SearchBar";
import { foods, foodCategories } from "@/data/foods";
import { ArrowLeft, ArrowRight, Leaf } from "lucide-react";

export default function FoodPicker() {
  const navigate = useNavigate();
  const [selectedFoods, setSelectedFoods] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFoods = useMemo(() => {
    return foods.filter((food) => {
      const matchesCategory =
        !selectedCategory || food.category === selectedCategory;
      const matchesSearch =
        !searchQuery ||
        food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        food.nameHindi?.includes(searchQuery);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleFood = (foodId: string) => {
    setSelectedFoods((prev) => {
      const next = new Set(prev);
      if (next.has(foodId)) {
        next.delete(foodId);
      } else {
        next.add(foodId);
      }
      return next;
    });
  };

  const handleAnalyze = () => {
    // Store selected foods and navigate to results
    const selectedFoodsList = Array.from(selectedFoods);
    navigate("/results", { state: { selectedFoods: selectedFoodsList } });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container px-4 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/")}
              className="p-2 -ml-2 rounded-xl hover:bg-secondary transition-colors tap-highlight"
            >
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-hero-gradient flex items-center justify-center">
                <Leaf className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">NutriDiverse</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 container px-4 py-6">
        {/* Title */}
        <div className="mb-6">
          <h1 className="text-display-md text-foreground mb-2">
            What do you usually eat?
          </h1>
          <p className="text-muted-foreground">
            Select foods from your regular meals. Pick as many as you like!
          </p>
        </div>

        {/* Search */}
        <div className="mb-4">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search for roti, dal, paneer..."
          />
        </div>

        {/* Category filter */}
        <div className="mb-6">
          <CategoryFilter
            categories={foodCategories}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>

        {/* Selection count */}
        {selectedFoods.size > 0 && (
          <div className="mb-4 px-4 py-3 rounded-xl bg-primary/5 border border-primary/20">
            <p className="text-sm text-foreground">
              <span className="font-semibold text-primary">
                {selectedFoods.size} foods
              </span>{" "}
              selected
            </p>
          </div>
        )}

        {/* Empty state nudge */}
        {selectedFoods.size === 0 && (
          <div className="mb-4 px-4 py-3 rounded-xl bg-secondary border border-border">
            <p className="text-sm text-muted-foreground">
              👆 Tap on foods you eat regularly to select them
            </p>
          </div>
        )}

        {/* Food grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
          {filteredFoods.map((food) => (
            <FoodCard
              key={food.id}
              food={food}
              isSelected={selectedFoods.has(food.id)}
              onToggle={toggleFood}
            />
          ))}
        </div>

        {/* No results */}
        {filteredFoods.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-2">
              No foods found matching "{searchQuery}"
            </p>
            <Button
              variant="secondary"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory(null);
              }}
            >
              Clear filters
            </Button>
          </div>
        )}
      </main>

      {/* Bottom action bar */}
      <div className="sticky bottom-0 bg-background/95 backdrop-blur-sm border-t border-border safe-bottom">
        <div className="container px-4 py-4">
          <Button
            size="lg"
            className="w-full"
            disabled={selectedFoods.size < 3}
            onClick={handleAnalyze}
          >
            {selectedFoods.size < 3 ? (
              `Select at least ${3 - selectedFoods.size} more food${
                3 - selectedFoods.size > 1 ? "s" : ""
              }`
            ) : (
              <>
                Analyze My Foods
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
