import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home/Home";

import {
  HomeModernIcon,
  BookOpenIcon,
  WrenchScrewdriverIcon,
  HeartIcon,
  FaceSmileIcon,
} from "react-native-heroicons/solid";
import Booking from "../screens/Booking/Booking";
import Services from "../screens/Services/Services";
import Profile from "../screens/Profile/Profile";
import StackNavigation from "../routes/StackNavigation";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeIcon } from "react-native-heroicons/outline";
import Favorite from "../screens/Favorite/Favorite";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          alignItems: "center",
          bottom: 10,
          left: 10,
          right: 10,
          height: 55,
          borderWidth: 1,
          borderColor: "lightgrey",
          elevation: 0,
          backgroundColor: "white",
          borderRadius: 15,
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
                style={{ color: focused ? "#21005d" : "#EBDEF0" }}
              />
            </View>
          ),
        }}
        name="Home"
        component={StackNavigation}
      />
      <Tab.Screen
        name="Bookings"
        component={Booking}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <BookOpenIcon
                size={26}
                style={{ color: focused ? "#21005d" : "#EBDEF0" }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        options={{
          tabBarIcon: (focused) => (
            <View
              style={{
                backgroundColor: "#21005d",
                top: -20,
                width: 60,
                height: 60,
                borderRadius: 35,
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 40,
              }}
            >
              <WrenchScrewdriverIcon
                size={26}
                style={{
                  top: -20,
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  color: "#fff",
                  padding: 10,
                }}
              />
            </View>
          ),
        }}
        component={Services}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <HeartIcon
                size={26}
                style={{ color: focused ? "#21005d" : "#EBDEF0" }}
              />
            </View>
          ),
        }}
        name="Favorate"
        component={Favorite}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <FaceSmileIcon
                size={26}
                style={{ color: focused ? "#21005d" : "#EBDEF0" }}
              />
            </View>
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
