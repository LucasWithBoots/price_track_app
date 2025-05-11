import Ionicons from "@expo/vector-icons/Ionicons";
import { TextInput, TouchableOpacity, View } from "react-native";

function SearchInput() {
  return (
    <View className="bg-[white] rounded-full pl-7 pr-3 py-1 flex-row items-center">
      <TextInput
        className="flex-1 font-poppins_regular"
        placeholder="Lorem ipsum dolor sit"
      />
      <TouchableOpacity className="bg-[red] rounded-full p-2">
        <Ionicons name="mic" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
}

export default SearchInput;
