import { View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  BookOpenIcon,
  WrenchScrewdriverIcon,
  UserIcon,
} from "react-native-heroicons/solid";
import { HomeIcon } from "react-native-heroicons/solid";
import SpHome from "../ServiceProvider/SpHome";
import SpNav from "../ServiceProvider/routes/SpNav";
import SpServiceNav from "../ServiceProvider/routes/SpServiceNav";
import SpBookingNav from "../ServiceProvider/routes/SpBookingNav";

const Tab = createBottomTabNavigator();

const SpTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <HomeIcon
                size={26}
                style={{ color: focused ? "#21005d" : "#CBC3E3" }}
              />
            </View>
          ),
        }}
        name="spHome"
        component={SpHome}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <BookOpenIcon
                size={26}
                style={{ color: focused ? "#21005d" : "#CBC3E3" }}
              />
            </View>
          ),
        }}
        name="SpBooking"
        component={SpBookingNav}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <WrenchScrewdriverIcon
                size={26}
                style={{ color: focused ? "#21005d" : "#CBC3E3" }}
              />
            </View>
          ),
        }}
        name="SpService"
        component={SpServiceNav}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <UserIcon
                size={26}
                style={{ color: focused ? "#21005d" : "#CBC3E3" }}
              />
            </View>
          ),
        }}
        name="Profile"
        component={SpNav}
      />
    </Tab.Navigator>
  );
};

export default SpTabs;
