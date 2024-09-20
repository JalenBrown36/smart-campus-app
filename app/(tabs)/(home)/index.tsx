import { Link, Stack } from 'expo-router';
import { Image, Text, Button, View, StyleSheet, Alert } from 'react-native';


export default function Home() {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.container}>
        <Text style={{
          color: '#fff',
          fontSize: 32,
          fontWeight: 'semibold'
        }}>Smart Campus</Text>
        <Text style={{
          color: '#fff',
          fontSize: 16,
          textAlign: 'center'
        }}>Here to provide better services to our fellow retrievers</Text>
        <Button title='Sign in' onPress={() => Alert.alert('Button Presses')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    gap: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
});
