import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';

const ProgressBar = ({ label, initialProgress }) => {
  const [progress, setProgress] = useState(initialProgress || 0);

  useEffect(() => {
    // update from the website here
  }, []); 

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.progressBarContainer}>
        <Progress.Bar progress={progress} width={300} height={30} borderRadius={30}/>
        <Text style={styles.percentageText}>{`${Math.round(progress * 100)}%`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
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
    fontSize: 16,
  },
});

export default ProgressBar;
