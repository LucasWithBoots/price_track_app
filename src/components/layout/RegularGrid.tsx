import { View } from "react-native";

interface RegularGridProps {
  children: React.ReactNode;
}

function RegularGrid({ children }: RegularGridProps) {
  return <View className="mx-3">{children}</View>;
}

export default RegularGrid;
