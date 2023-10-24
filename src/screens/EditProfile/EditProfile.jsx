import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar } from "react-native-paper";
import { ShareIcon, UserIcon, UsersIcon } from "react-native-heroicons/outline";
import { TextInput } from "react-native-paper";
import { BASE_URL } from "../../axios/axios";
import axios from "axios";
import { useRoute } from "@react-navigation/native";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState(0);
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const {
    params: { emailId },
  } = useRoute();

  const handleSubmit = () => {
    axios
      .post(`${BASE_URL}/login`, {
        address: address,
        gender: gender,
      })
      .then((resp) => {
        console.log(resp, "post login");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <View style={{ backgroundColor: "transparent", height: "100%" }}>
      <Appbar.Header style={{ backgroundColor: "transparent" }}>
        <Appbar.BackAction />
        <Appbar.Content title="Edit Profile" />
      </Appbar.Header>
      <ImageBackground
        source={{
          uri: "https://previews.123rf.com/images/elenavdovina/elenavdovina1701/elenavdovina170100004/68249853-construction-tools-background-seamless-white-vector-seamless-pattern-with-linear-icons-of-building.jpg",
        }}
        style={{
          flex: 1,
          resizeMode: "cover",
          zIndex: -10,
          opacity: 0.2,
          height: "100%",
        }}
      />
      <View
        style={{ padding: 20, position: "absolute", top: 80, width: "100%" }}
      >
        <TextInput
          label="User Name"
          left={<TextInput.Icon icon="account" />}
          style={{
            marginTop: 20,
            backgroundColor: "transparent",
          }}
          value={name}
          onChangeText={(newName) => {
            setName(newName);
          }}
        />
        <TextInput
          label="Phone Number"
          left={<TextInput.Icon icon="phone" />}
          style={{
            marginTop: 20,
            backgroundColor: "transparent",
          }}
          value={phoneNo}
          onChangeText={(newPhoneNumber) => {
            setPhoneNo(newPhoneNumber);
          }}
        />
        <TextInput
          label="Gender"
          left={<TextInput.Icon icon="gender-male" />}
          style={{
            marginTop: 20,
            backgroundColor: "transparent",
          }}
          value={gender}
          onChangeText={(newGender) => {
            setGender(newGender);
          }}
        />
        <TextInput
          label="Address"
          left={<TextInput.Icon icon="map-marker" />}
          style={{
            marginTop: 20,
            backgroundColor: "transparent",
          }}
          value={address}
          onChangeText={(address) => {
            setAddress(address);
          }}
        />
        <TouchableOpacity
          onPress={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#21005d",
            width: "98%",
            marginLeft: 5,
            padding: 12,
            borderRadius: 10,
            marginTop: 40,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#FFFFFF",
              fontWeight: "600",
              fontSize: 15,
              paddingLeft: 10,
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditProfile;
