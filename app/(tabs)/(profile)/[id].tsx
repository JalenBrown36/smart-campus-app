// import { Link, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileScreen() {
    // const { id } = useLocalSearchParams();
    return (
        <View style={styles.container}>
            <Text>Profile</Text>
            {/* <Link href="/asda">Bad link</Link> */}
        </View>   
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
});