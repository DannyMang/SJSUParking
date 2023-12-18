import { View, Text, StyleSheet } from 'react-native';
import TopBanner from '../components/TopBanner.js';
import BottomButton from '../components/BottomButton.js';
import ProgressBar from '../components/ProgressBar.js';

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
        <TopBanner title="SJSU Parking" />
        <View style={styles.content}>
          <ProgressBar label="West" initialProgress={0.1} />
          <ProgressBar label="South" initialProgress={0.0} />
          <ProgressBar label="North" initialProgress={0.8} />
          <ProgressBar label="South Campus" initialProgress={0.5} />
        </View>
      </View>
    );

}
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