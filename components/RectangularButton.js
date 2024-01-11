import React from 'react';
import {Text, TouchableOpacity, StyleSheet } from 'react-native';

const RectangularButton = ({onPress, title }) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}> 
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#0055A2',
        paddingVertical: 20,
        paddingHorizontal: 7,
        borderColor: '#001F3F',
        borderWidth: 1,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'left',
    },
});

export default RectangularButton;