import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Card from "../Components/Card";
import Input from "../Components/Input";
const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  //This will replace any non numeric value
  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>select a Number</Text>
          {/* here if you wrong props i.e. maxlength instead of maxLength you will not get an error but this part will not work */}
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={2}
            keyboardType="numeric"
            onChangeText={numberInputHandler}
            value={enteredValue}
          />

          <View style={styles.buttonContainer}>
            <View style={[{ width: 90 }]}>
              <Button title="Reset" onPress={() => {}} />
            </View>
            <View styles={[{ width: 100 }]}>
              <Button title="Confirm" onPress={() => {}} />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center", //align items horizontally
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    paddingHorizontal: 15,
  },
  button: {
    width: 70,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
});
export default StartGameScreen;
