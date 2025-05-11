import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuButton from "../components/home/MenuButton";
import MenuSelectionBar from "../components/home/MenuSelectionBar";
import SearchInput from "../components/home/SearchInput";

export default function Index() {
  return (
    <LinearGradient colors={["#213555", "#A6CDC6"]} className="flex-1">
      <SafeAreaView className="justify-between flex-1 mt-10">
        <View className="mx-5">
          <Text className="text-[white] text-5xl leading-tight font-poppins_bold">
            Lorem ipsum dolor sit amet,
          </Text>
          <Text className="text-[#ffffff5e] text-5xl leading-tight font-poppins_bold">
            consectetur adipiscing
          </Text>
        </View>

        <View className="mx-2">
          <View className="ml-2">
            <MenuSelectionBar />
          </View>
          <View className="flex-row gap-1 flex-wrap ">
            <MenuButton
              title={"Duis pharetra"}
              subtitle={"Sapien at facilisis"}
              icon={"cart-outline"}
            />
            <MenuButton
              title={"Nunc eu"}
              subtitle={"Vestibulum ante"}
              icon={"airplane-outline"}
            />
            <MenuButton
              title={"Fusce ut"}
              subtitle={"Aliquam accumsan"}
              icon={"analytics-outline"}
            />
          </View>
          <View className="mt-7">
            <SearchInput />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
