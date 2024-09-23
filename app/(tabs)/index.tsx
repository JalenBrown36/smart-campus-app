import { Link, Stack } from "expo-router";
import {
  Image,
  ImageBackground,
  Text,
  Pressable,
  View,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

const backgroundImage = {
  uri: "https://umbc.edu/wp-content/uploads/2022/02/UMBC-Campus-drone2020-0415.jpg",
};

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.homepageImage}
      >
        <View style={[styles.container, styles.content1, styles.overlay]}>
          <Image
            style={styles.homepageLogo}
            source={require("@/assets/images/logos/umbc-logo.png")}
          />
          <View style={{gap: 8}}>
            <Text style={[styles.text, styles.header]}>Smart Campus</Text>
            <Text style={[styles.text, styles.body]}>
              Here to provide better services to our fellow retrievers
            </Text>
          </View>
          <Pressable onPress={() => Alert.alert("Button Presses")} style={styles.button}>
            <Text style={styles.buttonText}>Sign in</Text>
          </Pressable>
          <View style={[styles.container2]}>
            <Text style={[styles.text, styles.body]}>Learn more</Text>
            <AntDesign name="down" size={24} color="white" />
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    position: "absolute",
    bottom: 16,
    width: '100%',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content1: {
    paddingHorizontal: "10%",
    gap: 32,
  },
  overlay: {
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
  text: {
    color: "#fff",
    textAlign: 'center',
  },
  header: {
    fontSize: 36,
    fontWeight: "bold",
  },
  body: {
    fontSize: 20,
    fontWeight: 'regular',
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
