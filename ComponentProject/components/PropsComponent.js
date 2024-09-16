import React from "react";
import { Text, View } from "react-native";

const PropsComponent = ({ name }) => {
  return (
    // Opret en View og Text, der viser "Made by {name}"
    <View>
      <Text>Made by {name}</Text>
    </View>
  );
};

export default PropsComponent;
