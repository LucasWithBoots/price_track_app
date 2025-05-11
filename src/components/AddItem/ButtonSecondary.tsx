import { Text, TouchableOpacity } from "react-native";

function ButtonSecondary() {
  return (
    <TouchableOpacity className="bg-buttonSecondary rounded-md py-3 px-4 self-start gap-3 h-16 justify-center shadow-lg">
      <Text className="text-[white] font-poppins_medium text-base">Scan</Text>
    </TouchableOpacity>
  );
}

export default ButtonSecondary;
