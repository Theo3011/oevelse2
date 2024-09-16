// Import Sektion
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import FirstComponent from "./components/FirstComponent";
import PropsComponent from "./components/PropsComponent";
import InputComponent from "./components/InputComponent";
import ButtonComponent from "./components/ButtonComponent";
import AssetComponent from "./components/AssetComponent";

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

      {/* ButtonComponent sektion */}
      <View style={styles.buttonComponentContainer}>
        <ButtonComponent />
      </View>

      {/* AssetComponent sektion */}
      <View style={styles.assetComponentContainer}>
        <AssetComponent url={require("./assets/favicon.png")} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

// Style Sektion
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  firstComponentContainer: {
    flex: 1,
    backgroundColor: "#a2d5f2",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 10, // Added space between sections
    padding: 20, // Added padding for better structure
    borderRadius: 10, // Smooth corners
  },
  propsComponentContainer: {
    flex: 1,
    backgroundColor: "#81b29a",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 10,
    padding: 20,
    borderRadius: 10,
  },
  inputComponentContainer: {
    flex: 1,
    backgroundColor: "#f4d35e",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 10,
    padding: 20,
    borderRadius: 10,
  },
  buttonComponentContainer: {
    flex: 1,
    backgroundColor: "#ee6c4d",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 10,
    padding: 20,
    borderRadius: 10,
  },
  assetComponentContainer: {
    flex: 1,
    backgroundColor: "#e0fbfc",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 20,
    borderRadius: 10,
  },
});
