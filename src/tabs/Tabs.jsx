import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  HomeModernIcon,
  BookOpenIcon,
  WrenchScrewdriverIcon,
  HeartIcon,
  FaceSmileIcon,
  UserIcon,
} from "react-native-heroicons/solid";
import Services from "../screens/Services/Services";
import StackNavigation from "../routes/StackNavigation";
import { HomeIcon } from "react-native-heroicons/solid";
import Favorite from "../screens/Favorite/Favorite";
import AsyncStorage from "@react-native-community/async-storage";

import ProfileNavigator from "../routes/ProfileNavigator";
import BookingNavigation from "../routes/BookingNavigation";
import RegistrationForm from "../screens/Auth/RegistrationForm";
import useUserStore from "../store/store";

const Tab = createBottomTabNavigator();

const Tabs = ({ email }) => {
  const { newUser } = useUserStore((state) => ({
    newUser: state.newUser,
  }));

  if (newUser === true) {
    return <RegistrationForm email={email} />;
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "red !important", // Inline style example
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <HomeIcon
                size={26}
                style={{ color: focused ? "#673de6" : "#CBC3E3" }}
              />
            </View>
          ),
        }}
        name="home"
        component={StackNavigation}
      />
      <Tab.Screen
        name="Bookings"
        component={BookingNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <BookOpenIcon
                size={26}
                style={{ color: focused ? "#673de6" : "#CBC3E3" }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <HeartIcon
                size={26}
                style={{ color: focused ? "#673de6" : "#CBC3E3" }}
              />
            </View>
          ),
        }}
        name="Favorite"
        component={Favorite}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <UserIcon
                size={26}
                style={{ color: focused ? "#673de6" : "#CBC3E3" }}
              />
            </View>
          ),
        }}
        name="Profile"
        component={ProfileNavigator}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
