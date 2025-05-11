import { ScrollView, Text } from "react-native";

interface MenuSelectionBar {}

function MenuSelectionBar() {
  return (
    <ScrollView
      className="flex-row mb-4 "
      horizontal={true}
      contentContainerStyle={{ columnGap: 10 }}
    >
      <Text className="text-lg text-[white] font-poppins_bold">
        Lorem Ipsum
      </Text>
      <Text className="text-lg text-[#ffffff96] font-poppins_regular">
        Consectuor
      </Text>
      <Text className="text-lg text-[#ffffff96] font-poppins_regular">
        Adipiscing
      </Text>
      <Text className="text-lg text-[#ffffff96] font-poppins_regular">
        Aliquam
      </Text>
      <Text className="text-lg text-[#ffffff96] font-poppins_regular">
        Nulla
      </Text>
      <Text className="text-lg text-[#ffffff96] font-poppins_regular">
        Morbi
      </Text>
      <Text className="text-lg text-[#ffffff96] font-poppins_regular">
        Mauris congue
      </Text>
      <Text className="text-lg text-[#ffffff96] font-poppins_regular">
        Pellentesque
      </Text>
    </ScrollView>
  );
}

export default MenuSelectionBar;
