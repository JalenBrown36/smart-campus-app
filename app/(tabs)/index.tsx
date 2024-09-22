import { Link, Stack } from "expo-router";
import {
  Image,
  ImageBackground,
  Text,
  Pressable,
  View,
  StyleSheet,
  Alert,
} from "react-native";

const backgroundImage = {
  uri: "https://umbc.edu/wp-content/uploads/2022/02/UMBC-Campus-drone2020-0415.jpg",
};

export default function Home() {
  return (
    <View style={styles.screenContainer}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.homepageImage}
      >
        <View style={styles.container}>
          <Image
            style={styles.homepageLogo}
            source={require("@/assets/images/logos/umbc-logo.png")}
          />
          <View style={{gap: 8}}>
            <Text style={styles.headerText}>Smart Campus</Text>
            <Text style={styles.bodyText}>
              Here to provide better services to our fellow retrievers
            </Text>
          </View>
          <Pressable onPress={() => Alert.alert("Button Presses")} style={styles.button}>
            <Text style={styles.buttonText}>Sign in</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    paddingHorizontal: "10%",
    flex: 1,
    gap: 32,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,.6)",
  },
  homepageImage: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  homepageLogo: {
    width: 300,
    height: 280,
    resizeMode: "contain",
  },
  headerText: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
    textAlign: 'center',
  },
  bodyText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'semibold',
    color: '#000',
  }
});
