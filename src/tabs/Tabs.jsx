import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
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

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => {
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    }}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 30,
        backgroundColor: "A52A2A",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>;
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
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
              <HomeModernIcon
                size={26}
                style={{ color: focused ? "#21005d" : "#EBDEF0" }}
              />
            </View>
          ),
        }}
        name="Home"
        component={Home}
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
        component={Services}
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
