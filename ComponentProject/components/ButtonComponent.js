import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const ButtonComponent = () => {
  // Opret en useState til at tracke, om knappen er trykket
  const [isCodingAccepted, setIsCodingAccepted] = useState(true);

  // Funktion til at ændre state når knappen trykkes
  const toggleCodingPreference = () => {
    setIsCodingAccepted(!isCodingAccepted);
  };

  return (
    <View >
      {/* Skift mellem to tekster afhængigt af state */}
      <Text style={{ fontSize: 18, marginBottom: 20 }}>
        {isCodingAccepted ? "Ja til kode!" : "Nej til kode"}
      </Text>
      {/* Opret en knap, der ændrer state når den trykkes */}
      <Button
        title={
          isCodingAccepted
            ? 'Skift til "Nej til kode"'
            : 'Skift til "Ja til kode"'
        }
        onPress={toggleCodingPreference}
      />
    </View>
  );
};

export default ButtonComponent;
