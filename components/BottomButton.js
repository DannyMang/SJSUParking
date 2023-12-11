// BottomButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BottomButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    padding: 15,
    alignItems: 'center',
  },
  label: {
    color: 'white',
    fontSize: 18,
  },
});

export default BottomButton;
