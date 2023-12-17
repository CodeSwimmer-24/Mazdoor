import { View, Text, Image } from "react-native";
import React from "react";

const NoBooking = () => {
  return (
    <View>
      <Image
        source={{
          uri: "https://img.freepik.com/premium-vector/man-has-repaired-old-house-rent_701961-3369.jpg",
        }}
        style={{
          marginTop: 50,
          height: 300,
        }}
      />
      <Text
        style={{
          marginTop: 20,
          textAlign: "center",
          fontWeight: "800",
          fontSize: 25,
          color: "#f44336",
        }}
      >
        OPPS! No Booking Found
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontWeight: "700",
          fontSize: 13,
          padding: 20,
          color: "gray",
        }}
      >
        You will fined your booking when any body books your services. Please
        Wait ...
      </Text>
    </View>
  );
};

export default NoBooking;
