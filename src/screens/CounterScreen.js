import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const CounterScreen = (props) => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Text style={styles.text}>Value: {counter}</Text>
      <TouchableOpacity 
        onPress={() => {
            setCounter(counter + 1);
          }}   
        >
        <Text style={styles.btnUp}>Increment ++</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => {
            if (counter > 0) {
              setCounter(counter - 1);
            }}}   
        >
        <Text style={styles.btnDown}>Subtract --</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 110,
  },
  btnUp: {
    fontSize: 50,
    color: '#00c300'
  },
  btnDown: {
      fontSize: 50,
      color: '#e20000'
  }
});

export default CounterScreen;
