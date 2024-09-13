import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import FirstComponent from "./components/FirstComponent"; 
import PropsComponent from "./components/PropsComponent";  // Sørg for, at stien til PropsComponent er korrekt

export default function App() {
  return (
    <View style={styles.container}>
      {/* Første komponent */}
      <View
        style={{
          flex: 1,
          backgroundColor: "lightblue",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <FirstComponent />
      </View>

      {/* Nyt view med PropsComponent */}
      <View
        style={{
          flex: 1,
          backgroundColor: "lightgreen",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <PropsComponent name="Dit-navn-her" />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
});
