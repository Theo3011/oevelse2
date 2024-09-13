// Import Sektion
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import FirstComponent from "./components/FirstComponent";
import PropsComponent from "./components/PropsComponent";
import InputComponent from "./components/InputComponent"; // Tilføj InputComponent

// Logik Sektion (her er ingen yderligere logik for App.js på nuværende tidspunkt)
export default function App() {
  
  // HTML (View) Sektion
  return (
    <View style={styles.container}>
      
      {/* FirstComponent sektion */}
      <View style={styles.firstComponentContainer}>
        <FirstComponent />
      </View>
      
      {/* PropsComponent sektion */}
      <View style={styles.propsComponentContainer}>
        <PropsComponent name="sneo og sarl" />
      </View>

      {/* InputComponent sektion */}
      <View style={styles.inputComponentContainer}>
        <InputComponent />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

// Style Sektion
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
