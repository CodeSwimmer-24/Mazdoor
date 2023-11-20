import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";

const NoBooking = () => {
  return (
    <View
      style={{
        marginTop: 60,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <View>
        <Image
          source={{
            uri: "https://img.freepik.com/premium-vector/cyberspace-modern-flat-concept-web-banner-design-man-vr-glasses-explores-augmented-reality_9209-7880.jpg?w=2000",
          }}
          style={{
            height: 300,
            width: 300,
          }}
        />
      </View>
      <View>
        <Text
          style={{
            marginTop: 20,
            textAlign: "center",
            fontWeight: "800",
            fontSize: 30,
            color: "#f44336",
          }}
        >
          OPPS! No Booking
        </Text>
      </View>
    </View>
  );
};

export default NoBooking;
