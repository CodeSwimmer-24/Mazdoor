import { View, Text, Image } from "react-native";
import React from "react";
import Poster from "../../assets/poster.png";

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
          source={Poster}
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
