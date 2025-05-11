import ButtonSecondary from "@/src/components/AddItem/ButtonSecondary";
import FormsTextInput from "@/src/components/AddItem/FormsTextInput";
import BackgroundGradient from "@/src/components/layout/BackgroundGradient";
import RegularGrid from "@/src/components/layout/RegularGrid";
import Item from "@/src/components/ListItems/Item";
import { IItem } from "@/src/interfaces/IItem/IItem";
import { FlatList, Text, View } from "react-native";

function Index() {
  const dummyItems: IItem[] = [
    {
      id: 1,
      title: "Premium Coffee Beans",
      prices: [
        { price: 12.99, date: new Date("2023-01-15") },
        { price: 13.49, date: new Date("2023-02-20") },
        { price: 14.99, date: new Date("2023-03-10") },
      ],
    },
    {
      id: 2,
      title: "Wireless Headphones",
      prices: [
        { price: 89.99, date: new Date("2023-01-05") },
        { price: 79.99, date: new Date("2023-02-15") },
        { price: 69.99, date: new Date("2023-03-25") },
      ],
    },
    {
      id: 3,
      title: "Organic Cotton T-Shirt",
      prices: [
        { price: 24.99, date: new Date("2023-01-10") },
        { price: 22.99, date: new Date("2023-02-18") },
        { price: 19.99, date: new Date("2023-03-30") },
      ],
    },
    {
      id: 4,
      title: "Stainless Steel Water Bottle",
      prices: [
        { price: 18.99, date: new Date("2023-01-20") },
        { price: 18.99, date: new Date("2023-02-22") },
        { price: 16.99, date: new Date("2023-03-15") },
      ],
    },
    {
      id: 5,
      title: "Smartphone Case",
      prices: [
        { price: 15.99, date: new Date("2023-01-08") },
        { price: 14.99, date: new Date("2023-02-12") },
        { price: 12.99, date: new Date("2023-03-05") },
      ],
    },
  ];

  return (
    <BackgroundGradient>
      <RegularGrid>
        <View className="bg-[white] mt-4 h-full rounded-t-xl p-2">
          <FlatList
            data={dummyItems}
            renderItem={({ item }) => (
              <Item id={item.id} title={item.title} prices={item.prices} />
            )}
          />
        </View>
      </RegularGrid>
    </BackgroundGradient>
  );
}

export default Index;
