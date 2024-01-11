// TopBanner.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TopBanner = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0055A2',
    padding: 10,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
    textAlignVertical: 'center',
  },
});

export default TopBanner;
