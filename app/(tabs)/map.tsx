import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { GOOGLE_API_KEY } from "@env";

let locationsOfInterest = [
  {
    title: "Starbucks",
    location: {
      latitude: 39.25443843578654,
      longitude: -76.71327591954797,
    },
    description: "First Marker",
  },
  {
    title: "Chick-fil-a",
    location: {
      latitude: 39.25471473334163,
      longitude: -76.7128625024087,
    },
    description: "Second Marker",
  },
  {
    title: "Einstein Bros. Bagels",
    location: {
      latitude: 39.25714418620347,
      longitude: -76.71168051921056,
    },
    description: "Third Marker",
  },
];

const mapJSON = null;

export default function MapScreen() {
  const onRegionChange = (region: Object) => {
    console.log(region);
  };

  const showLocationsOfInterest = () => {
    return locationsOfInterest.map((marker, index) => {
      return (
        <Marker
          key={index}
          coordinate={marker.location}
          title={marker.title}
          description={marker.description}
        />
      );
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        onRegionChange={onRegionChange}
        initialRegion={{
          latitude: 39.25560139606841,
          latitudeDelta: 0.016848528826294284,
          longitude: -76.71110857516486,
          longitudeDelta: 0.012590418621698518,
        }}
        customMapStyle={undefined}
      >
        {showLocationsOfInterest()}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    flex: 1,
    width: "100%",
  },
});
