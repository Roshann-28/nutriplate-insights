import { cn } from "@/lib/utils";

interface RiskScoreCircleProps {
  score: number;
  size?: "sm" | "md" | "lg";
}

export function RiskScoreCircle({ score, size = "lg" }: RiskScoreCircleProps) {
  // Determine color based on score (inverted - lower is better for diversity)
  const getScoreColor = (score: number) => {
    if (score <= 30) return "text-risk-low";
    if (score <= 50) return "text-risk-moderate";
    if (score <= 70) return "text-risk-high";
    return "text-risk-critical";
  };

  const getScoreLabel = (score: number) => {
    if (score <= 30) return "Excellent Diversity";
    if (score <= 50) return "Good Variety";
    if (score <= 70) return "Could Be Better";
    return "Needs Attention";
  };

  const getScoreBgColor = (score: number) => {
    if (score <= 30) return "stroke-risk-low";
    if (score <= 50) return "stroke-risk-moderate";
    if (score <= 70) return "stroke-risk-high";
    return "stroke-risk-critical";
  };

  const dimensions = {
    sm: { size: 120, strokeWidth: 8, fontSize: "text-2xl" },
    md: { size: 180, strokeWidth: 10, fontSize: "text-4xl" },
    lg: { size: 240, strokeWidth: 12, fontSize: "text-5xl" },
  };

  const { size: circleSize, strokeWidth, fontSize } = dimensions[size];
  const radius = (circleSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = ((100 - score) / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative" style={{ width: circleSize, height: circleSize }}>
        {/* Background circle */}
        <svg
          className="transform -rotate-90"
          width={circleSize}
          height={circleSize}
        >
          <circle
            cx={circleSize / 2}
            cy={circleSize / 2}
            r={radius}
            stroke="hsl(var(--border))"
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx={circleSize / 2}
            cy={circleSize / 2}
            r={radius}
            className={cn(getScoreBgColor(score), "animate-score-fill")}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={progress}
            style={{
              transition: "stroke-dashoffset 1.5s ease-out",
            }}
          />
        </svg>

        {/* Score text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={cn(fontSize, "font-bold", getScoreColor(score))}>
            {score}
          </span>
          <span className="text-sm text-muted-foreground font-medium">
            Risk Score
          </span>
        </div>
      </div>

      {/* Label */}
      <div
        className={cn(
          "px-4 py-2 rounded-full text-sm font-semibold",
          score <= 30 && "bg-risk-low/10 text-risk-low",
          score > 30 && score <= 50 && "bg-risk-moderate/10 text-risk-moderate",
          score > 50 && score <= 70 && "bg-risk-high/10 text-risk-high",
          score > 70 && "bg-risk-critical/10 text-risk-critical"
        )}
      >
        {getScoreLabel(score)}
      </div>
    </div>
  );
}
