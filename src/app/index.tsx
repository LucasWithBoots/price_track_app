import React, { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuButton from "../components/home/MenuButton";
import MenuSelectionBar from "../components/home/MenuSelectionBar";
import SearchInput from "../components/home/SearchInput";
import BackgroundGradient from "../components/layout/BackgroundGradient";
import { IMenuSelectionBarItem } from "../interfaces/IMenuSelectionBar/IMenuSelectionBarItem";
function Index() {
  const menuItems: IMenuSelectionBarItem[] = [
    { value: "home", label: "Home" },
    { value: "products", label: "Products" },
  ];

  const [selectedItem, setSelectedItem] = useState<IMenuSelectionBarItem>(
    menuItems[0]
  );

  const renderBlocks = () => {
    switch (selectedItem.value) {
      case "home":
        return (
          <>
            <MenuButton
              title={"Add new item"}
              subtitle={"Sapien at facilisis"}
              icon={"cart-outline"}
              navigate={"/AddItem"}
            />
            <MenuButton
              title={"List items"}
              subtitle={"Vestibulum ante"}
              icon={"reorder-three-outline"}
              navigate={"/ListItems"}
            />
          </>
        );
      case "products":
        return (
          <MenuButton
            title={"Fusce ut"}
            subtitle={"Aliquam accumsan"}
            icon={"analytics-outline"}
            navigate={"/AddItem"}
          />
        );
    }
  };

  return (
    <BackgroundGradient>
      <SafeAreaView className="justify-between flex-1 mt-10">
        <View className="mx-5">
          <Text className="text-[white] text-5xl leading-tight font-poppins_bold">
            Lorem ipsum dolor sit amet,
          </Text>
          <Text className="text-[#ffffff5e] text-5xl leading-tight font-poppins_bold">
            consectetur adipiscing.
          </Text>
        </View>

        <View className="mx-2">
          <View className="ml-2">
            <MenuSelectionBar
              elements={menuItems}
              selected={selectedItem}
              handlePress={(item) => setSelectedItem(item)}
            />
          </View>
          <View className="flex-row gap-1 flex-wrap">{renderBlocks()}</View>
          <View className="mt-7">
            <SearchInput />
          </View>
        </View>
      </SafeAreaView>
    </BackgroundGradient>
  );
}

export default Index;
