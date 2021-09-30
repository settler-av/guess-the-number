import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
const Input = (props) => {
  //here i have used spread operator to spread the props and input styles int the styles ={{}}
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};
const styles = StyleSheet.create({
  input: {
    // backgroundColor: 'red',
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    marginVertical: 10,
  },
});
export default Input;
