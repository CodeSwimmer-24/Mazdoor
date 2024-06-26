import { View, Text, Image } from "react-native";
import React from "react";
import { PhoneIcon } from "react-native-heroicons/outline";

const Info = ({ profileDetails, personalDetails }) => {
  return (
    <>
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          padding: 20,
        }}
      >
        <View style={{}}>
          <Image
            source={{
              uri: "https://t4.ftcdn.net/jpg/01/15/85/23/360_F_115852367_E6iIYA8OxHDmRhjw7kOq4uYe4t440f14.jpg",
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
