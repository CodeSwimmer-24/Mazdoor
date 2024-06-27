import { View, Text, Image } from "react-native";
import React from "react";

const Info = ({ profileDetails, personalDetails }) => {
  return (
    <>
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          paddingHorizontal: 15,
          paddingVertical: 20,
        }}
      >
        <View style={{}}>
          <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_960_720.png",
            }}
            style={{
              height: 80,
              width: 80,
              borderRadius: 50,
            }}
          />
        </View>
        <View style={{ marginLeft: 20 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: "#343434",
            }}
          >
            {profileDetails.name}
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontWeight: "400",
              color: "gray",
            }}
          >
            {personalDetails.emailId}
          </Text>
          <Text
            style={{
              marginTop: 2,
              fontSize: 13,
              fontWeight: "400",
              color: "gray",
            }}
          >
            Age {profileDetails.age} - {profileDetails.gender}ale
          </Text>

          <Text
            style={{
              marginTop: 2,
              fontSize: 13,
              fontWeight: "400",
              color: "gray",
            }}
          >
            +91 {profileDetails.contactNo}
          </Text>
        </View>
      </View>
      <View
        style={{
          marginLeft: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            color: "#673de7",
          }}
        >
          About Me
        </Text>
        <Text
          style={{
            marginTop: 2,
            fontSize: 13,
            paddingRight: 15,
            fontWeight: "300",
            color: "#343434",
          }}
        >
          {personalDetails.short_description}
        </Text>
      </View>
    </>
  );
};

export default Info;
