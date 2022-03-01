import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = ({ imageSrc, title, rating}) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <Image source={imageSrc} />
      <Text style={styles.subText}>{rating} stars</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    marginVertical: 15
  },
  subText: {
      marginBottom: 5
  }
});

export default ImageDetail;
