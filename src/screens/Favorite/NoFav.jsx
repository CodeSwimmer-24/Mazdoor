import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";

const NoFav = () => {
  return (
    <View
      style={{
        marginTop: 60,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginLeft: 20,
      }}
    >
      <Image
        source={{
          uri: "https://img.freepik.com/premium-vector/cyberspace-modern-flat-concept-web-banner-design-man-vr-glasses-explores-augmented-reality_9209-7880.jpg?w=2000",
        }}
        style={{
          height: 300,
          width: 300,
        }}
      />
      <Text
        style={{
          marginTop: 20,
          textAlign: "center",
          fontWeight: "800",
          fontSize: 30,
          color: "#f44336",
        }}
      >
        OPPS! No Favorate
      </Text>
    </View>
  );
};

export default NoFav;
