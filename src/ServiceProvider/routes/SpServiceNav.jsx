import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SpService from "../Screens/SpService/SpService";
import AddStore from "../Screens/SpService/AddStore";

const SpServiceNav = () => {
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
      <Stack.Screen name="SpService" component={SpService} />
      <Stack.Screen name="SpAddStore" component={AddStore} />
    </Stack.Navigator>
  );
};

export default SpServiceNav;
