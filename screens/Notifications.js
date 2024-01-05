import {View, Text} from 'react-native';
import NotificationButton from '../components/NotifcationSwitch';
export default function Notifications() {
    return (
        <View>
            <NotificationButton garage_name={"South Garage"}></NotificationButton>
            <NotificationButton garage_name={"West Garage"}></NotificationButton>
            <NotificationButton garage_name={"North Garage"}></NotificationButton>
            <NotificationButton garage_name={"South Campus Garage"}></NotificationButton>
        </View>
    );
}