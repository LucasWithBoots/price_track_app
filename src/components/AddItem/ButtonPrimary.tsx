import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, TouchableOpacity } from "react-native";

interface ButtonPrimaryProps {
  icon: keyof typeof Ionicons.glyphMap;
}

function ButtonPrimary({ icon }: ButtonPrimaryProps) {
  return (
    <TouchableOpacity
      className="bg-buttonPrimary rounded-full py-4 flex-row justify-center gap-3 shadow-lg"
      style={{ shadowColor: "#FF4D02" }}
    >
      <Text className="text-[white] font-poppins_semibold text-lg">
        Lorem Ipsum
      </Text>
      <Ionicons name={icon} size={24} color="white" />
    </TouchableOpacity>
  );
}

export default ButtonPrimary;
