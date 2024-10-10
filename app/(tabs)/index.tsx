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
  Dimensions,
  ScrollView,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

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
        <View style={styles.container}>
          <ScrollView 
            contentContainerStyle={{ paddingHorizontal: "10%" }}
            decelerationRate={1}
            snapToInterval={629}
            snapToAlignment="center">
            <View style={styles.scrollContentContainer}>
              <View style={[styles.scrollContent, {marginTop: 136}]}>
                <View style={{gap: 16}}>
                  <Image
                    style={styles.homepageLogo}
                    source={require("@/assets/images/logos/umbc-logo.png")}
                  />
                  <View style={{ gap: 8 }}>
                    <Text style={styles.titleText}>Smart Campus</Text>
                    <Text style={styles.titleBodyText}>
                      Here to provide better services to our fellow retrievers
                    </Text>
                    <Pressable
                      onPress={() => Alert.alert("Button Presses")}
                      style={styles.button}
                    >
                      <Text style={styles.buttonText}>Sign in</Text>
                    </Pressable>
                  </View>
                </View>
                <View style={{paddingBottom: 8, alignItems: 'center'}}>
                  <Text style={[styles.titleBodyText, {fontSize: 16, fontWeight: '600'}]}>Learn More</Text>
                  <AntDesign name="down" size={24} color="white" />
                </View>
              </View>
            </View>
            {/* Second page */}
            <View style={[styles.scrollContent, styles.headerTextContainerSpacing, {paddingBottom: 64}]}>
              <View style={styles.headerTextSpacing}>
                <Text style={styles.headerText}>Our Mission</Text>
                <Text style={styles.bodyText}>Project "Smart Campus" aims to enhance the experience of UMBC students by providing an innovative application that delivers real-time information about on-campus services, such as Chick-fil-A and Starbucks.</Text>
              </View> 
              <View style={styles.headerTextSpacing}>
                <Text style={styles.headerText}>Our Concerns</Text>
                <Text style={styles.bodyText}>One of our main concerns is that long queues can lead to a negative customer experience. Traditional methods for monitoring queues, like using cameras, often raise privacy issues since they can identify individuals and collect personal data. To address this, we developed a privacy-friendly IoT solution that measures queue lengths and estimates waiting times without compromising privacy.</Text>
              </View> 
              <View style={styles.headerTextSpacing}>
                <Text style={styles.headerText}>Our Goals</Text>
                <Text style={styles.bodyText}>Our goal is to deploy a system at UMBC's Starbucks, Chick-fil-A, and other popular locations, providing real-time and historical queue data to empower students in choosing optimal visiting times, ultimately creating a universal solution that enhances campus life for everyone.</Text>
              </View> 
            </View>
          </ScrollView>
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
  container: {
    width: "100%",
    flex: 1,
    gap: 32,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,.7)",
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
  titleText: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "800",
    textAlign: "center",
  },
  titleBodyText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 'regular',
  },
  headerText: {
    color: '#FFC20E',
    fontSize: 36,
    fontWeight: '700',
    textAlign: 'left',
  },
  headerTextContainerSpacing: {
    gap: 24
  },
  headerTextSpacing: {
    gap: 8
  },
  bodyText: {
    width: Dimensions.get('screen').width / 1.5,
    color: "#fff",
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    textAlign: "left",
  },
  button: {
    marginTop: 8,
    marginHorizontal: "auto",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "semibold",
    color: "#000",
  },
  scrollContentContainer: {
    height: Dimensions.get("screen").height - 79,
  },
  scrollContent: {
    flex: 1,
    marginTop: 64,
    justifyContent: 'space-between',
  },
});
