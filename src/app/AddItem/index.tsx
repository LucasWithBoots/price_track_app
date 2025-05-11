import ButtonPrimary from "@/src/components/AddItem/ButtonPrimary";
import ButtonSecondary from "@/src/components/AddItem/ButtonSecondary";
import FormsTextInput from "@/src/components/AddItem/FormsTextInput";
import BackgroundGradient from "@/src/components/layout/BackgroundGradient";
import RegularGrid from "@/src/components/layout/RegularGrid";
import { View } from "react-native";

function Index() {
  return (
    <BackgroundGradient>
      <RegularGrid>
        <View className="gap-5">
          <View className="flex-row gap-3">
            <ButtonSecondary />
            <View className="flex-1">
              <FormsTextInput icon="barcode-outline" />
            </View>
          </View>
          <FormsTextInput icon="book-outline" />
          <FormsTextInput icon="car-outline" />
          <ButtonPrimary icon="checkmark-done-outline" />
        </View>
      </RegularGrid>
    </BackgroundGradient>
  );
}

export default Index;
