import React from 'react';
import { Text, View } from 'react-native';

const FirstComponent = () => {
    return (
        // Opret en View, og tilføj en Text-komponent indeni.
        <View style={{ padding: 20 }}>
            <Text>Hello, this is my first component!</Text>
        </View>
    );
}

export default FirstComponent;
