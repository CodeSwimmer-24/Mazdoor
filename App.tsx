import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./src/routes/StackNavigation";
import { AuthProvider } from "./src/hooks/auth/useAuth";
import Tabs from "./src/tabs/Tabs";

export default function App() {
  return (
    <NavigationContainer>
      {/* <Tabs /> */}
      <StackNavigation />
    </NavigationContainer>
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
