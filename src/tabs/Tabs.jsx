import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
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

import ProfileNavigator from "../routes/ProfileNavigator";
import BookingNavigation from "../routes/BookingNavigation";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          alignItems: "center",
          height: 60,
          // borderWidth: 1,
          borderColor: "lightgrey",
          elevation: 0,
          backgroundColor: "white",
          // borderRadius: 15,
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
        name="Services"
        options={{
          tabBarIcon: (focused) => (
            <View
              style={{
                backgroundColor: "#673de6",
                top: -20,
                width: 55,
                height: 55,
                borderRadius: 35,
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 40,
              }}
            >
              <WrenchScrewdriverIcon
                size={22}
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
                style={{ color: focused ? "#673de6" : "#CBC3E3" }}
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
