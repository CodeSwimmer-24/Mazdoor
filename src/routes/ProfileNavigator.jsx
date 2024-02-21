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
import SubscribeType from "../screens/Subscribe/SubscribeType";
import Profile from "../screens/Profile/Profile";
import EditProfile from "../Model/EditProfile/EditProfile";
import Share from "../Model/SharePage/Share";

const ProfileNavigator = () => {
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
      initialRouteName="profile"
      screenOptions={{
        headerShown: false,
        obscureBackground: true,
        animation: "fade_from_bottom",
        animationTypeForReplace: "pop",
        animationDuration: 300,
      }}
    >
      <Stack.Group>
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="subscribe" component={SubscribeType} />
        <Stack.Screen name="subscribeTo" component={Subscribe} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: "transparentModal",
        }}
      >
        <Stack.Screen name="editProfile" component={EditProfile} />
        <Stack.Screen name="share" component={Share} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
