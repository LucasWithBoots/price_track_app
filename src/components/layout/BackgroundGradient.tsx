import { LinearGradient } from "expo-linear-gradient";

interface BackgroundGradientProps {
  children: React.ReactNode;
}

function BackgroundGradient({ children }: BackgroundGradientProps) {
  return (
    <LinearGradient colors={["#213555", "#A6CDC6"]} className="flex-1">
      {children}
    </LinearGradient>
  );
}

export default BackgroundGradient;
