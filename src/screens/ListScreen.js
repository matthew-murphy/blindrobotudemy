import React from 'react'
import { Text, StyleSheet, View, FlatList } from "react-native";

export default function ListScreen() {
    const friends = [
        { name: 'Friend #1', age: '20'},
        { name: 'Friend #2', age: '21'},
        { name: 'Friend #3', age: '22'},
        { name: 'Friend #4', age: '23'},
        { name: 'Friend #5', age: '24'},
        { name: 'Friend #6', age: '25'},
        { name: 'Friend #7', age: '26'},
        { name: 'Friend #8', age: '28'},
        { name: 'Friend #9', age: '20'}
    ];

  return (
    <FlatList 
        // horizontal
        // showsHorizontalScrollIndicator={false}

        keyExtractor={friend => friend.name} // array key
        data={friends} 
        renderItem={({ item }) => {
            return <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
        }}
    />
  )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
      marginVertical: 50,
      marginHorizontal: 10
    },
    greetingStyle: {
      fontSize: 20
    }
  });