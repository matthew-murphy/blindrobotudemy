import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ColorAdjust from "../components/ColorAdjust";

const SquareScreen = ({props}) => {
  return (
    <View>
      <ColorAdjust color='Red' />
      <ColorAdjust color='Green' />
      <ColorAdjust color='Blue' />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  },
});

export default SquareScreen;
