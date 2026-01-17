import { Food } from "@/data/foods";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface FoodCardProps {
  food: Food;
  isSelected: boolean;
  onToggle: (foodId: string) => void;
}

export function FoodCard({ food, isSelected, onToggle }: FoodCardProps) {
  return (
    <button
      onClick={() => onToggle(food.id)}
      className={cn(
        "relative flex flex-col items-center p-4 rounded-2xl border-2 transition-all duration-200 tap-highlight touch-target food-card-hover",
        "bg-card shadow-nutri min-h-[100px]",
        isSelected
          ? "border-primary bg-primary/5 shadow-nutri-hover"
          : "border-border hover:border-primary/50"
      )}
    >
      {/* Selection indicator */}
      {isSelected && (
        <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
          <Check className="w-4 h-4 text-primary-foreground" />
        </div>
      )}

      {/* Emoji */}
      <span className="text-3xl mb-2" role="img" aria-label={food.name}>
        {food.emoji}
      </span>

      {/* Name */}
      <span className="text-sm font-medium text-center text-foreground leading-tight">
        {food.name}
      </span>

      {/* Hindi name if available */}
      {food.nameHindi && (
        <span className="text-xs text-muted-foreground mt-0.5">
          {food.nameHindi}
        </span>
      )}
    </button>
  );
}
