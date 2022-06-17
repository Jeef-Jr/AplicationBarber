import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Routes from "./src/router";

import { useFonts, Bayon_400Regular } from "@expo-google-fonts/bayon";
import { Roboto_300Light, Roboto_400Regular } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Bayon_400Regular,
    Roboto_300Light,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  return (
    <>
      <Routes />
      <StatusBar style="auto" />
    </>
  );
}
