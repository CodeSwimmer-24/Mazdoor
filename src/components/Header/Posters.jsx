import { View, Text, Image } from "react-native";
import React from "react";

const Posters = () => {
  return (
    <View style={{ width: "100%" }}>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          paddingHorizontal: 15,
          paddingVertical: 5,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            padding: 5,
            fontSize: 18,
            fontWeight: "600",
            color: "#241c6a",
          }}
        >
          Special Offers
        </Text>
        <Text
          style={{
            fontWeight: "600",
            color: "#673de6",
          }}
        >
          See All
        </Text>
      </View>
      <View
        style={{
          width: "94%",
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={{
            uri: "https://img.freepik.com/premium-vector/mega-sale-discount-banner-set-promotion-with-yellow-background_497837-702.jpg",
          }}
          style={{
            height: 150,
            width: "100%",
            borderRadius: 20,
          }}
        />
      </View>
    </View>
  );
};

export default Posters;