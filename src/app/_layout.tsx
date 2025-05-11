import "@/global.css";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
  useFonts,
} from "@expo-google-fonts/poppins";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import BackgroundGradient from "../components/layout/BackgroundGradient";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <BackgroundGradient>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "transparent" },
          headerStyle: {
            backgroundColor: "#213555",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Poppins_500Medium",
            fontSize: 20,
          },
          headerTintColor: "white",
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Index",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddItem/index"
          options={{
            title: "Add Item",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="ListItems/index"
          options={{
            title: "List Items",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="ListItems/[id]"
          options={{
            title: "Item Details",
            headerShown: true,
          }}
        />
      </Stack>
    </BackgroundGradient>
  );
}
