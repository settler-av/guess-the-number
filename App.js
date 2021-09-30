import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "D:/Project/guessTheNumber/Components/Header.js";
import StartGameScreen from "./screens/StartGameScreen";
export default function App() {
  return (
    <View style={styles.Screen}>
      <Header title="Guess the Number" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: 'center',
  },
});
