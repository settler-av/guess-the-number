import React from "react";
import { StyleSheet, View } from "react-native";

import Header from "./Components/Header";
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
