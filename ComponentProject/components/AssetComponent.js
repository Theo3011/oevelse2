import React from "react";
import { Image, View, StyleSheet } from "react-native";

const AssetComponent = ({ url }) => {
  return (
    <View>
      <Image
        source={url} // Brug url direkte for lokale filer
      />
    </View>
  );
};

export default AssetComponent;
