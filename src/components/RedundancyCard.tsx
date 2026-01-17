import { AlertTriangle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface RedundancyCardProps {
  title: string;
  description: string;
  severity: "info" | "warning" | "critical";
  foods?: string[];
}

export function RedundancyCard({
  title,
  description,
  severity,
  foods,
}: RedundancyCardProps) {
  const severityStyles = {
    info: {
      bg: "bg-primary/5 border-primary/20",
      icon: "text-primary",
      iconBg: "bg-primary/10",
    },
    warning: {
      bg: "bg-risk-moderate/5 border-risk-moderate/20",
      icon: "text-risk-moderate",
      iconBg: "bg-risk-moderate/10",
    },
    critical: {
      bg: "bg-risk-critical/5 border-risk-critical/20",
      icon: "text-risk-critical",
      iconBg: "bg-risk-critical/10",
    },
  };

  const styles = severityStyles[severity];
  const Icon = severity === "info" ? Info : AlertTriangle;

  return (
    <div
      className={cn(
        "p-4 rounded-2xl border-2 transition-all duration-200",
        styles.bg
      )}
    >
      <div className="flex gap-3">
        <div
          className={cn(
            "flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center",
            styles.iconBg
          )}
        >
          <Icon className={cn("w-5 h-5", styles.icon)} />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-foreground mb-1">{title}</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
          {foods && foods.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {foods.map((food) => (
                <span
                  key={food}
                  className="px-2 py-1 text-xs rounded-lg bg-secondary text-secondary-foreground font-medium"
                >
                  {food}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
