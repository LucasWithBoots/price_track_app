import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { IItem } from "@/src/interfaces/IItem/IItem";
import { router } from "expo-router";

function Item({ id, title, prices }: IItem) {
  const mostRecentPrice = prices.sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  )[0].price;

  const handlePress = () => {
    router.push({
      pathname: "/ListItems/[id]",
      params: { id },
    });
  };

  return (
    <TouchableOpacity
      className="flex-row items-center gap-7 bg-[#F5F5F5] p-4 rounded-md"
      key={id}
      onPress={handlePress}
    >
      <View className="bg-buttonSecondary h-3 w-3 rounded-full ml-3" />
      <View className="flex-row justify-between flex-1 pr-3 items-center">
        <View>
          <Text className="font-poppins_semibold">{title}</Text>
          <Text className="font-poppins_medium">U$ {mostRecentPrice}</Text>
        </View>
        <Ionicons name="caret-up-outline" size={24} color="green" />
      </View>
    </TouchableOpacity>
  );
}

export default Item;
