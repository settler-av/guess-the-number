import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from 'D:/Project/guessTheNumber/guessTheNumber/Components/Header.js';

export default function App() {
  return (
    <View style={styles.Screen}>
      <Header title="Guess the Number"/>
    </View>
  );
}

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
