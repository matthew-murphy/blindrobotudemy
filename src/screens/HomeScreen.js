import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Lasers!</Text>
      <Button 
      onPress={() => navigation.navigate('Components')}
      title="Components Demo" 
      />
      <Button 
      onPress={() => navigation.navigate('List')}
      title="List Demo" 
      />
      <Button 
      onPress={() => navigation.navigate('Image')}
      title="Image Demo" 
      />
      <Button 
      onPress={() => navigation.navigate('Counter')}
      title="Counter Demo" 
      />
      <Button 
      onPress={() => navigation.navigate('Color')}
      title="Color Demo" 
      />
      <Button 
      onPress={() => navigation.navigate('Square')}
      title="Color-Square Demo" 
      />
     {/* <TouchableOpacity onPress={()=> props.navigation.navigate('List')}>
       <Text>List Demo</Text>
     </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  },
});

export default HomeScreen;
