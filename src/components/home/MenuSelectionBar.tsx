import { ScrollView, Text } from "react-native";

interface MenuSelectionBar {}

function MenuSelectionBar() {
  return (
    <ScrollView
      className="flex-row mb-4"
      horizontal={true}
      contentContainerStyle={{ columnGap: 10 }}
    >
      <Text className="text-lg text-[white] font-bold">Lorem Ipsum</Text>
      <Text className="text-lg text-[#ffffff96]">Consectuor</Text>
      <Text className="text-lg text-[#ffffff96]">Adipiscing</Text>
      <Text className="text-lg text-[#ffffff96]">Aliquam</Text>
      <Text className="text-lg text-[#ffffff96]">Nulla</Text>
      <Text className="text-lg text-[#ffffff96]">Morbi</Text>
      <Text className="text-lg text-[#ffffff96]">Mauris congue</Text>
      <Text className="text-lg text-[#ffffff96]">Pellentesque</Text>
    </ScrollView>
  );
}

export default MenuSelectionBar;
