import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";
import ServiceDetails from "../screens/ServiceDetails/ServiceDetails";
import DisplayCards from "../global/DisplayCards/DisplayCards";
import LoginScreen from "../screens/Auth/LoginScreen";
import { useNavigation } from "@react-navigation/native";
import ModelScreen from "../components/Model/ModelScreen";
import Booking from "../screens/Booking/Booking";
import Subscribe from "../screens/Subscribe/Subscribe";
import EditProfile from "../screens/EditProfile/EditProfile";

const StackNavigation = () => {
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
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="serviceDetail" component={ServiceDetails} />
        <Stack.Screen name="displayCards" component={DisplayCards} />
        <Stack.Screen name="booking" component={Booking} />
        <Stack.Screen name="subscribe" component={Subscribe} />
        <Stack.Screen name="editProfile" component={EditProfile} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: "transparentModal",
        }}
      >
        <Stack.Screen name="Modal" component={ModelScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigation;
