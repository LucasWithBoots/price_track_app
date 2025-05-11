import Ionicons from "@expo/vector-icons/Ionicons";
import { TextInput, View } from "react-native";

interface FormsTextInputProps {
  icon: keyof typeof Ionicons.glyphMap;
}

function FormsTextInput({ icon }: FormsTextInputProps) {
  return (
    <View className="bg-[#EAEEEF] rounded-lg flex-row items-center gap-2 pl-3 ">
      <Ionicons name={icon} size={18} color="black" />
      <TextInput
        className="flex-1  h-16 font-poppins_medium text-base"
        placeholder="Lorem ipsum"
      />
    </View>
  );
}

export default FormsTextInput;
