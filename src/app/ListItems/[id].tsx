import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import BackgroundGradient from "@/src/components/layout/BackgroundGradient";
import RegularGrid from "@/src/components/layout/RegularGrid";

function ItemDetails() {
  const { id } = useLocalSearchParams();

  return (
    <BackgroundGradient>
      <RegularGrid>
        <View>
          <Text>{id}</Text>
        </View>
      </RegularGrid>
    </BackgroundGradient>
  );
}

export default ItemDetails;
