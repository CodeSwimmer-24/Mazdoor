import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";
import noFav from "../../assets/noFav.png";

const NoFav = () => {
  return (
    <View
      style={{
        marginTop: 50,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <View>
        <Image
          source={noFav}
          style={{
            height: 250,
            width: 250,
          }}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "700",
            color: "#2f1c6a",
          }}
        >
          OPPS! No Favorite
        </Text>
        <Text
          style={{
            textAlign: "center",
            paddingHorizontal: 25,
            paddingVertical: 5,
            fontSize: 12,
            fontWeight: "300",
          }}
        >
          Please Add your Favorite Service Provider in this list.
        </Text>
      </View>
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#673de71a",
          marginTop: 20,
          width: "90%",
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
          Make New Favorite List
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoFav;
