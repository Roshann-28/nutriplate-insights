import { cn } from "@/lib/utils";

interface Category {
  id: string;
  name: string;
  emoji: string;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelect: (categoryId: string | null) => void;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelect,
}: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4">
      {/* All button */}
      <button
        onClick={() => onSelect(null)}
        className={cn(
          "flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 tap-highlight touch-target",
          selectedCategory === null
            ? "bg-primary text-primary-foreground shadow-button"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        )}
      >
        All Foods
      </button>

      {/* Category buttons */}
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelect(category.id)}
          className={cn(
            "flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 tap-highlight touch-target whitespace-nowrap",
            selectedCategory === category.id
              ? "bg-primary text-primary-foreground shadow-button"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
        >
          <span>{category.emoji}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
}
