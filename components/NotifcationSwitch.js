import React, { useState } from 'react';
import { Switch, View, Text, StyleSheet } from 'react-native';

const NotificationButton = ({ garage_name }) => {
  const [status, setStatus] = useState(false);

  const toggleSwitch = () => {
    setStatus((prevStatus) => !prevStatus);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.garageName}>{garage_name}</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={status ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={status}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Center and add space between elements
    paddingHorizontal: 20, // Adjust the horizontal padding for additional spacing
    marginTop: 10, // Adjust the top margin for spacing
  },
  garageName: {
    fontSize: 16, // Adjust the font size if needed
    marginRight: 10, // Add right margin for spacing between text and switch
  },
});

export default NotificationButton;
