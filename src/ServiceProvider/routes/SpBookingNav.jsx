import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SpService from "../Screens/SpService/SpService";
import AddStore from "../Screens/SpService/AddStore";
import AddService from "../Screens/SpService/AddService";
import SpBooking from "../SpBooking/SpBooking";
import StatusModal from "../SpBooking/StatusModal";

const SpBookingNav = () => {
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
        <Stack.Screen name="SpBooking" component={SpBooking} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: "transparentModal",
        }}
      >
        <Stack.Screen name="statusModal" component={StatusModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default SpBookingNav;
