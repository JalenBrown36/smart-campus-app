import { Tabs, Link, usePathname } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text } from "react-native";

export default function TabsLayout() {
  const pathname = usePathname();
  return (
    <Tabs
      initialRouteName="/map"
      screenOptions={{
        unmountOnBlur: true,
        headerTitle: () => null,
        headerLeft: () => {
          let title = "";

          if (pathname === "/map") {
            title = "Map";
          } else if (pathname === "/profile") {
            title = "Profile";
          }

          return (
            <Text style={{ fontSize: 24, fontWeight: "600", paddingLeft: 32 }}>
              {title}
            </Text>
          );
        },
        headerRight: () => (
          <Link href="/" style={{ paddingRight: 32 }}>
            <Ionicons
              name="information-circle-outline"
              size={32}
              color="blue"
            />
          </Link>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: (props: {
            focused: boolean;
            color: string;
            size: number;
          }) => {
            let iconName = props.focused ? "home" : "home-outline";

            return (
              <Ionicons
                name={iconName as any}
                size={props.size}
                color={props.color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Map",
          tabBarIcon: (props: {
            focused: boolean;
            color: string;
            size: number;
          }) => {
            let iconName = props.focused ? "map" : "map-outline";

            return (
              <Ionicons
                name={iconName as any}
                size={props.size}
                color={props.color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: (props: {
            focused: boolean;
            color: string;
            size: number;
          }) => {
            let iconName = props.focused ? "person" : "person-outline";

            return (
              <Ionicons
                name={iconName as any}
                size={props.size}
                color={props.color}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
