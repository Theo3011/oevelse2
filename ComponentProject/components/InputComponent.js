import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const InputComponent = () => {
    // Opret en state til at gemme inputværdien
    const [inputValue, setInputValue] = useState("");

    return (
        <View style={styles.container}>
            {/* Input felt der opdaterer state */}
            <TextInput
                style={styles.input}
                placeholder="Skriv noget her..."
                value={inputValue}
                onChangeText={(txt) => setInputValue(txt)}
            />
            
            {/* Tekst der dynamisk viser det indtastede */}
            <Text style={styles.text}>
                Du har indtastet: {inputValue}
            </Text>
        </View>
    );
};

export default InputComponent;