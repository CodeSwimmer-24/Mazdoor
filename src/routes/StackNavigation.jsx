import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";
import ServiceDetails from "../screens/ServiceDetails/ServiceDetails";
import DisplayCards from "../global/DisplayCards/DisplayCards";
import LoginScreen from "../screens/Auth/LoginScreen";

const StackNavigation = () => {
  const user = true;
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="serviceDetail" component={ServiceDetails} />
          <Stack.Screen name="displayCards" component={DisplayCards} />
        </>
      ) : (
        <Stack.Screen name="login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
