import ButtonPrimary from "@/src/components/AddItem/ButtonPrimary";
import FormsTextInput from "@/src/components/AddItem/FormsTextInput";
import BackgroundGradient from "@/src/components/layout/BackgroundGradient";
import RegularGrid from "@/src/components/layout/RegularGrid";
import { View } from "react-native";

function Index() {
  return (
    <BackgroundGradient>
      <RegularGrid>
        <View className="gap-5">
          <FormsTextInput icon="person-outline" />
          <FormsTextInput icon="book-outline" />
          <FormsTextInput icon="car-outline" />
          <ButtonPrimary icon="checkmark-done-outline" />
        </View>
      </RegularGrid>
    </BackgroundGradient>
  );
}

export default Index;
