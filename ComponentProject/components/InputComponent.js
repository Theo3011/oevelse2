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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  firstComponentContainer: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  propsComponentContainer: {
    flex: 1,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  inputComponentContainer: {
    flex: 1,
    backgroundColor: "lightyellow",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

export default InputComponent;
