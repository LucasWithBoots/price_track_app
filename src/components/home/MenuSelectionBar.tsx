import { IMenuSelectionBarItem } from "@/src/interfaces/IMenuSelectionBar/IMenuSelectionBarItem";
import { FlatList, Text } from "react-native";

interface MenuSelectionBarProps {
  elements: IMenuSelectionBarItem[];
  selected: IMenuSelectionBarItem;
  handlePress: (item: IMenuSelectionBarItem) => void;
}

function MenuSelectionBar({
  elements,
  selected,
  handlePress,
}: MenuSelectionBarProps) {
  return (
    <FlatList
      horizontal={true}
      contentContainerStyle={{ columnGap: 10 }}
      className="flex-row mb-4 "
      data={elements}
      renderItem={({ item }) => (
        <Text
          className={`text-lg text-[white]  ${
            selected.value === item.value
              ? "font-poppins_bold"
              : "font-poppins_regular"
          }`}
          onPress={() => handlePress(item)}
        >
          {item.label}
        </Text>
      )}
      keyExtractor={(item) => item.value}
    />
  );
}

export default MenuSelectionBar;
