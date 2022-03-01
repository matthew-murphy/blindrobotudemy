import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const ColorAdjust = ({color}) => {
  return (
    <View style={{alignItems: 'center', marginTop: 100}}>
      <Text style={styles.text}>{color}</Text>
      <TouchableOpacity><Text style={styles.subText}>{`++ ${color}`}</Text></TouchableOpacity>
      <TouchableOpacity><Text style={styles.subText}>{`-- ${color}`}</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  subText: {
      fontSize: 20,
      marginBottom: 5
  }

});

export default ColorAdjust;
