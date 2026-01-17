import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

interface NutrientData {
  nutrient: string;
  value: number;
  fullMark: number;
}

interface NutrientRadarChartProps {
  data: NutrientData[];
}

export function NutrientRadarChart({ data }: NutrientRadarChartProps) {
  return (
    <div className="w-full h-[300px] sm:h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid
            stroke="hsl(var(--border))"
            strokeDasharray="3 3"
          />
          <PolarAngleAxis
            dataKey="nutrient"
            tick={{
              fill: "hsl(var(--foreground))",
              fontSize: 11,
              fontWeight: 500,
            }}
            tickLine={false}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 10]}
            tick={false}
            axisLine={false}
          />
          <Radar
            name="Your Nutrients"
            dataKey="value"
            stroke="hsl(var(--primary))"
            fill="hsl(var(--primary))"
            fillOpacity={0.3}
            strokeWidth={2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

// Sample data for placeholder
export const sampleNutrientData: NutrientData[] = [
  { nutrient: "Protein", value: 7, fullMark: 10 },
  { nutrient: "Fiber", value: 5, fullMark: 10 },
  { nutrient: "Iron", value: 6, fullMark: 10 },
  { nutrient: "Calcium", value: 4, fullMark: 10 },
  { nutrient: "Vit A", value: 8, fullMark: 10 },
  { nutrient: "Vit C", value: 6, fullMark: 10 },
  { nutrient: "Vit D", value: 2, fullMark: 10 },
  { nutrient: "B12", value: 3, fullMark: 10 },
  { nutrient: "Omega-3", value: 2, fullMark: 10 },
  { nutrient: "Zinc", value: 5, fullMark: 10 },
];
