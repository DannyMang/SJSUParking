// App.js
import React from 'react';
import HomeScreen from './screens/HomeScreen.js';
import SettingsPage from './screens/SettingsPage.js';
import AboutPage from './screens/AboutPage.js';
import Notifications from './screens/Notifications.js';
import AppearancePage from './screens/AppearancePage.js';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator(); //bottom tab object
const SettingsStack = createNativeStackNavigator();

function TabNavigator() { //navigator function for Home and Settings tabs
  return (
    <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name ="Home" component={HomeScreen}/>
        <Tab.Screen name="Settings" component={SettingsNavigator} />
      </Tab.Navigator>
  )
}

function SettingsNavigator() { //navigator for Settings
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings Page" component={SettingsPage} options={{headerShown: false}}/>
      <SettingsStack.Screen name="About" component={AboutPage} />
      <SettingsStack.Screen name="Appearance" component={AppearancePage} />
      <SettingsStack.Screen name="Notifications" component={Notifications}/>
    </SettingsStack.Navigator>
  )
}

export default function App() { //display the tab navigator as homepage
  return (    
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
};



