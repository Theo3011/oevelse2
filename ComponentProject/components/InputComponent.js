import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

const InputComponent = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <View>
      <TextInput
        placeholder="Skriv noget her..."
        value={inputValue}
        onChangeText={(txt) => setInputValue(txt)}
      />
      <Text>Du har indtastet: {inputValue}</Text>
    </View>
  );
};

export default InputComponent;
