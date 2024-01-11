import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';
import openMap, { createOpenLink } from 'react-native-open-maps';

const ProgressBar = ({ label, initialProgress, onPressData }) => {
  const [progress, setProgress] = useState(initialProgress || 0);

  useEffect(() => {
    // update from the website here
  }, []); 

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
      <TouchableOpacity onPress={onPressData}>
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.progressBarContainer}>
        <Progress.Bar color='#0055A2' progress={progress} width={300} height={30} borderRadius={5}/>
        <Text style={styles.percentageText}>{`${Math.round(progress * 100)}%`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 20,
    
  },
  titleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
   
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
   
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  percentageText: {
    marginLeft: 10,
    fontSize: 18,
  },
 
});

export default ProgressBar;
