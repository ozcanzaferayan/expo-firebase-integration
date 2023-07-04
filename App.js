import React from "react";
import { Button, SafeAreaView } from "react-native";
import crashlytics from "@react-native-firebase/crashlytics";

export default function App() {
  return (
    <SafeAreaView>
      <Button title="Crash Test" onPress={() => crashlytics.crash()} />
    </SafeAreaView>
  );
}
