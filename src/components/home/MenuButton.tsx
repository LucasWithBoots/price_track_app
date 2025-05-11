import Ionicons from "@expo/vector-icons/Ionicons";
import { Href, router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

interface MenuButtonProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle: string;
  navigate: Href;
}

function MenuButton({ title, subtitle, icon, navigate }: MenuButtonProps) {
  return (
    <TouchableOpacity
      className="bg-[white] h-44 rounded-lg justify-between py-5 px-5 w-[49%]"
      onPress={() => router.navigate(navigate)}
    >
      <Ionicons name={icon} size={27} color="black" />
      <View>
        <Text className="text-textPrimary font-poppins_semibold text-xl">
          {title}
        </Text>
        <Text className="text-base font-poppins_regular">{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default MenuButton;
