import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import SpProfile from "../Screens/SpProfile/SpProfile";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditProfile from "../Screens/SpProfile/EditProfile";

const SpNav = () => {
  const user = true;
  const Stack = createNativeStackNavigator();

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShadow: false,
    });
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        obscureBackground: true,
        animation: "fade_from_bottom",
        animationTypeForReplace: "pop",
        animationDuration: 300,
      }}
    >
      <Stack.Screen name="SpProfile" component={SpProfile} />
      <Stack.Screen name="spEditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

export default SpNav;
