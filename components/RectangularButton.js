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
        backgroundColor: '#3498db',
        paddingVertical: 20,
        paddingHorizontal: 7,
        borderColor: '#001F3F',
        borderWidth: 2,
        
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'left',
    },
});

export default RectangularButton;