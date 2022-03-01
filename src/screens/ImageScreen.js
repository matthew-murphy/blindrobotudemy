import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = ({ props }) => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSrc={require("../../assets/forest.jpg")}
        rating="4/5"
      />
      <ImageDetail 
        title="Beach" 
        imageSrc={require("../../assets/beach.jpg")} 
        rating="3.5/5"
      />
      <ImageDetail
        title="Mountain"
        imageSrc={require("../../assets/mountain.jpg")}
        rating="4.5/5"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  },
});

export default ImageScreen;
