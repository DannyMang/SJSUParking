import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Switch, StyleSheet, Text} from 'react-native';
import RectangularButton from '../components/RectangularButton';


export default function SettingsPage() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const navigation = useNavigation()
    return ( //returns RectangularButton component that navigates to pages
        <View style={styles.container}>
            <RectangularButton 
                onPress={() => navigation.navigate('About')} 
                title="About" />
            <View style={styles.box}>
                <Text style={styles.text}>Appearance</Text>
                <Switch
                    style={styles.switch}
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <RectangularButton
                onPress={() => navigation.navigate('Notifications')} 
                title="Notifications" />
        </View>
      
    );

}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 1,
        flexDirection: 'column',
    },
    box: {
        backgroundColor: '#0055A2',
        paddingVertical: 20,
        paddingHorizontal: 7,
        borderColor: '#001F3F',
        borderWidth: 2,
    },
    text: {
        flexDirection: 'row',
        fontSize: 16,
        color: '#fff',
    },
    switch: {
        position: 'absolute',
        top: 0,
        right: 0,
        margin: 15,
    },
  });


