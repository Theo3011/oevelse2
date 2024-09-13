import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import FirstComponent from "./components/FirstComponent"; 
import PropsComponent from "./components/PropsComponent"; 


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.firstComponentContainer}>
        <FirstComponent />
      </View>
      <View style={styles.propsComponentContainer}>
        <PropsComponent name="sneo og sarl" />
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
});
