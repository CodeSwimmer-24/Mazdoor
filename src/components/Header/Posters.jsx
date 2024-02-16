import { View, Text, Image } from "react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";
import { TouchableRipple } from "react-native-paper";

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
            fontSize: moderateScale(18),
            fontWeight: "600",
            color: "#241c6a",
          }}
        >
          Special Offers
        </Text>
        <TouchableRipple
          style={{
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 20,
          }}
          rippleColor={"#673de680"}
          borderless
          onPress={() => {}}
        >
          <Text
            style={{
              fontWeight: "600",
              color: "#673de6",
              fontSize: moderateScale(14),
            }}
          >
            {" "}
            See All
          </Text>
        </TouchableRipple>
      </View>
      <View
        style={{
          width: "95%",
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={{
            uri: "https://img.freepik.com/premium-vector/mega-sale-discount-banner-set-promotion-with-yellow-background_497837-702.jpg",
          }}
          style={{
            height: moderateScale(160),
            width: "100%",
            borderRadius: 20,
          }}
        />
      </View>
    </View>
  );
};

export default Posters;
