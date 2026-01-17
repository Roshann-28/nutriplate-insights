import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function LoadingSpinner({ size = "md", className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-5 h-5 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
  };

  return (
    <div
      className={cn(
        "rounded-full border-primary/20 border-t-primary animate-spin",
        sizeClasses[size],
        className
      )}
    />
  );
}

export function LoadingScreen({ message = "Analyzing your foods..." }) {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center gap-6 z-50">
      <LoadingSpinner size="lg" />
      <p className="text-lg text-muted-foreground font-medium animate-pulse">
        {message}
      </p>
    </div>
  );
}
