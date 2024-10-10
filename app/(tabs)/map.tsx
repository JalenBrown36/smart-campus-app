import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";

export default function MapScreen() {
    return (
        <View style={styles.container}>
            <Text>Map</Text>
            <MapView style={styles.map}/>
        </View>   
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      map: {
        flex: 1, 
        width: '100%',
      },
});