import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

const InputComponent = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Skriv noget her..."
        value={inputValue}
        onChangeText={(txt) => setInputValue(txt)}
      />
      <Text style={styles.text}>Du har indtastet: {inputValue}</Text>
    </View>
  );
};

export default InputComponent;
