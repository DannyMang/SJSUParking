import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RectangularButton = ({onPress, title }) => {
    return (
        <TouchableOpacity onPress={onPress}
        style={styles.buttonContainer}> 
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#3498db',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default RectangularButton;