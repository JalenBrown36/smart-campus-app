import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="(home)/index" options={{ headerShown: false }}/>
      <Tabs.Screen name="(map)/index" options={{title: 'Map'}}/>
      <Tabs.Screen name="(profile)/[id]" options={{title: 'Profile'}}/>
      <Tabs.Screen name="(about)/index" options={{title: 'About'}}/>
    </Tabs>
  );
}
