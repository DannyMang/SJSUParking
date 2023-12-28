import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, PanResponder, Animated } from 'react-native';

import TopBanner from '../components/TopBanner';
import ProgressBar from '../components/ProgressBar';

const HomeScreen = () => {
  const [parkingData, setParkingData] = useState([]);
  const [garageOrder, setGarageOrder] = useState([]);
  const panResponders = useRef({});
  const panPositions = useRef({});
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
        setGarageOrder(data.map((garage) => garage.name));
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

  const createPanResponder = (garageName) => {
    panResponders.current[garageName] = panResponders.current[garageName] || new Animated.ValueXY();

    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        panResponders.current[garageName].setValue({
          x: gestureState.dx,
          y: gestureState.dy,
        });
      },
      onPanResponderRelease: () => {
        panPositions.current[garageName] = panResponders.current[garageName]._value;
        const newOrder = parkingData.slice().sort((a, b) => {
          const aPosition = panPositions.current[a.name]?.y ?? 0;
          const bPosition = panPositions.current[b.name]?.y ?? 0;
          return aPosition - bPosition;
        });
        setGarageOrder(newOrder.map((garage) => garage.name));
      },
    });
  };

  return (
    <View style={styles.container}>
      <TopBanner title="SJSU Parking" />
      <View style={styles.content}>
        {garageOrder.map((garageName) => {
          const garage = parkingData.find((g) => g.name === garageName);

          return (
            <Animated.View
              key={garageName}
              style={[
                styles.draggableContainer,
                panResponders.current[garageName] &&
                panResponders.current[garageName].getLayout(),
              ]}
              onLayout={(event) => {
                panPositions.current[garageName] = {
                  x: event.nativeEvent.layout.x,
                  y: event.nativeEvent.layout.y,
                };
              }}
              {...createPanResponder(garageName).panHandlers}
            >
              <ProgressBar
                label={addressToNameMapping[garageName] || garageName}
                initialProgress={parseFloat(garage.fullness)}
              />
            </Animated.View>
          );
        })}
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
  draggableContainer: {
    marginBottom: 16,
  },
});

export default HomeScreen;
