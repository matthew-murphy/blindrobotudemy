import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function ComponentsScreen() {
    const myName = 'Ping'
  const greeting = <Text>My name is {myName}!</Text>;
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.greetingStyle}>{greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  greetingStyle: {
    fontSize: 20
  }
});
