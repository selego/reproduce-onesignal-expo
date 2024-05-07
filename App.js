import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { LogLevel, OneSignal } from "react-native-onesignal"; // commenting this line will fix the error

// import Constants from "expo-constants";

// OneSignal.Debug.setLogLevel(LogLevel.Verbose);
// OneSignal.initialize(Constants.expoConfig.extra.oneSignalAppId);

// // Also need enable notifications to complete OneSignal setup
// OneSignal.Notifications.requestPermission(true);

// OneSignal.initialize("YOUR-ONESIGNAL-APP-ID");

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
