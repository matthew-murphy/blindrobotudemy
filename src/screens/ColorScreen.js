import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, FlatList } from "react-native";

const ColorScreen = ({props}) => {
    const [color, setColor] = useState([])
  return (
    <View>
      <TouchableOpacity
        onPress={() => setColor([...color, rgbValues()])}
      >
          <Text style={styles.text}>Add a color</Text>
      </TouchableOpacity>

      <FlatList 
        keyExtractor={(item) => item}
        data={color}
        renderItem={({ item }) => {
        return <View style={{height: 100, width: 100, backgroundColor: item}}></View>
        }}
      />
    </View>
  );
};

const rgbValues = () => {
    const red = Math.floor((Math.random() * 256));
    const green = Math.floor((Math.random() * 256));
    const blue = Math.floor((Math.random() * 256));

    return `rgb(${red}, ${green}, ${blue})`
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    marginVertical: 40
  },
});

export default ColorScreen;
