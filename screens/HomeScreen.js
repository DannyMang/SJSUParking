import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TopBanner from '../components/TopBanner';
import ProgressBar from '../components/ProgressBar';

const HomeScreen = () => {
  const [parkingData, setParkingData] = useState([]);
  const addressToNameMapping = {
    '377 S. 7th St., San Jose, CA 95112': 'South Garage',
    '350 S. 4th St., San Jose, CA 95112': 'West Garage',
    '65 S. 10th St., San Jose, CA 95112': 'North Garage',
    '1278 S. 10th Street, San Jose, CA 95112': 'South Campus Garage',
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001'); // Update the server IP
        const data = await response.json();
        setParkingData(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();

    // Fetch data every 5 minutes
    const interval = setInterval(fetchData, 5 * 60 * 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <TopBanner title="SJSU Parking" />
      <View style={styles.content}>
        {parkingData.map((garage) => (
            <ProgressBar
              key={garage.name}
              label={addressToNameMapping[garage.name] || garage.name}
              initialProgress={parseFloat(garage.fullness)}
            />
          ))}
      </View>
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

export default HomeScreen;
