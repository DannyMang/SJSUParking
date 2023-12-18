import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {View} from 'react-native';
import RectangularButton from '../components/RectangularButton';


export default function SettingsPage() {
    const navigation = useNavigation()
    return ( //returns RectangularButton component that navigates to pages
        <View style={{paddingVertical: 1,}}>
            <RectangularButton 
                onPress={() => navigation.navigate('About')} 
                title="About" />
            <RectangularButton 
                onPress={() => navigation.navigate('Notifications')} 
                title="Notifications"/>
            <RectangularButton
                onPress={() => navigation.navigate('Appearance')} 
                title="Appearance" />
        </View>
      
    );

}


