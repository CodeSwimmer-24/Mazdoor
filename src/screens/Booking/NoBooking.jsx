import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";
import NoBookingImage from "../../assets/NoBooking.png";
import { useNavigation } from "@react-navigation/native";

const NoBooking = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginTop: 40,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <View>
        <Image
          source={NoBookingImage}
          style={{
            height: 200,
            width: 200,
          }}
        />
      </View>
      <Text
        style={{
          marginTop: 10,
          fontSize: 25,
          fontWeight: "700",
          color: "#2f1c6a",
        }}
      >
        Sorry! No Booking Found
      </Text>
      <Text
        style={{
          textAlign: "center",
          paddingHorizontal: 25,
          paddingVertical: 10,
          fontSize: 14,
          fontWeight: "300",
        }}
      >
        You are not having any bookings. Make a new Booking by clicking on the
        button
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Services");
        }}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#673de71a",
          marginTop: 10,
          width: "92%",
          padding: 12,
          borderRadius: 50,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#673de7",
            fontWeight: "700",
            fontSize: 15,
            paddingLeft: 10,
          }}
        >
          Make New Booking
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoBooking;
