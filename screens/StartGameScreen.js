import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import Card from "../Components/Card";
import Input from "../Components/Input";
const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  //This will replace any non numeric value at the time of entering it in textInput
  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  // to activate reset button
  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };
  //will check if input is valid or not and gives alert else
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber)|| chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("invalid Number!", "Number has to be between 1 to 99.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }

    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
  };
  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = <Text>Chosen Number: {selectedNumber}</Text>;
  }
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
              <Button title="Reset" onPress={resetInputHandler} />
            </View>
            <View styles={[{ width: 100 }]}>
              <Button title="Confirm" onPress={confirmInputHandler} />
            </View>
          </View>
        </Card>

        //just dummy output to check whether the information is stored in the set value or not
        //to Do: add your own styles in this output.
        //DOne till 13 watch 14 to format this
        {confirmedOutput}
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
