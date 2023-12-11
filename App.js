// App.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TopBanner from './components/TopBanner.js'
import BottomButton from './components/BottomButton.js';

const App = () => {
  return (
    <View style={styles.container}>
      <TopBanner title="SJSU Parking" />
      <View style={styles.content}>
        {/* Your main content goes here */}
        <Text>Content goes here</Text>
      </View>
      <BottomButton label="Button Placeholder" onPress={() => console.log('Button pressed')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default App;
