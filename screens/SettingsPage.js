import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Text} from 'react-native';
import RectangularButton from '../components/RectangularButton';
import AboutPage from './AboutPage';


export default function SettingsPage() {
    const navigation = useNavigation()
    return (
        <View>
            <RectangularButton onPress={() => navigation.navigate('About')} title="About Page" />
            <RectangularButton onPress={() => navigation.navigate('Appearance')} title="Appearance" />
        </View>
      
    );

}