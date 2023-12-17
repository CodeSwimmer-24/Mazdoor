import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";

const NoFav = () => {
  return (
    <View
      style={{
        marginTop: 120,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <View>
        <Image
          source={{
            uri: "https://cdn.dribbble.com/users/1097272/screenshots/10671982/no_favourites.png",
          }}
          style={{
            height: 250,
            width: 250,
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
          OPPS! No Favorate
        </Text>
        <Text
          style={{
            marginTop: 5,
            fontSize: 12,
            fontWeight: "400",
            color: "gray",
          }}
        >
          Please Add your Favorite Service Provider in this list.
        </Text>
      </View>
    </View>
  );
};

export default NoFav;
