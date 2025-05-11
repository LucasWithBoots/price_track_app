import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, TouchableOpacity, View } from "react-native";

interface MenuButtonProps {
  icon: string;
  title: string;
  subtitle: string;
}

function MenuButton({ title, subtitle, icon }: MenuButtonProps) {
  return (
    <TouchableOpacity className="bg-[white] h-44 rounded-lg justify-between py-5 px-5 w-[49%]">
      <Ionicons name={icon as any} size={27} color="black" />
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
