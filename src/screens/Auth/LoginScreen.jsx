import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Modal,
  Alert,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import axios from "axios";
import { BASE_URL } from "../../axios/axios";
import AsyncStorage from "@react-native-community/async-storage";

import Logo from "../../assets/logo.png";

import useUserStore from "../../store/store";

const LoginScreen = ({ onGoogleButtonPress, callbackFunction }) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const [role, setRole] = useState("customer");

  const checkNewUser = useUserStore((state) => state.checkNewUser);

  // const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const onToggleSwitch = () => {
    if (isSwitchOn === false) {
      setRole("mazdoor");
      setIsSwitchOn(true);
    } else {
      setRole("customer");
      setIsSwitchOn(false);
    }
  };

  const getLoggedIn = async (email, name) => {
    await axios
      .post(`${BASE_URL}/login`, {
        emailId: email,
        role: role,
        name: name,
      })
      .then(async (resp) => {
        console.log(resp.data.isNewUser, "------post login------");
        checkNewUser(resp.data.isNewUser);
        // await AsyncStorage.setItem(
        //   "newUser",
        //   resp.data.isNewUser ? "true" : "false"
        // );
      });
    await axios.get(`${BASE_URL}/getProfile?emailId=${email}`).then((resp) => {
      callbackFunction(resp.data.role);
      AsyncStorage.setItem("role", resp.data.role);
    });
  };

  const showAlert = () => {
    Alert.alert(
      "User Conformation",
      "Are you sure you want to register as Mazdoor/worker",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "CONFIRM",
          onPress: () => onGoogleButtonPress(getLoggedIn),
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <ImageBackground
        source={{}}
        style={{
          flex: 1,
          resizeMode: "cover", // or 'stretch' or 'contain' as per your requirement
        }}
      >
        <View
          style={{
            marginTop: "56%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              height: 220,
              width: 220,
            }}
            source={Logo}
          />
        </View>
        <View
          style={{
            width: "100%",
            position: "absolute",
            bottom: 60,
            justifyContent: "center", // Center vertically
            alignItems: "center", // Center horizontally
          }}
        >
          <TouchableOpacity
            onPress={() => onGoogleButtonPress(getLoggedIn)}
            style={{
              width: "85%",
              paddingTop: 12,
              paddingBottom: 12,
              paddingLeft: 80,
              paddingRight: 80,
              borderRadius: 50,
              backgroundColor: "#2f1c6a",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              elevation: 15,
              marginBottom: 20,
            }}
          >
            <Image
              source={{
                uri: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
              }}
              style={{
                width: 25,
                height: 25,
                marginRight: 5,
              }}
            />
            <Text
              style={{
                fontWeight: "500",
                fontSize: 14,
                color: "white",
              }}
            >
              Login as User
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setRole("mazdoor");
              showAlert();
            }}
            style={{
              width: "85%",
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 80,
              paddingRight: 80,
              borderRadius: 50,
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              elevation: 15,
            }}
          >
            <Image
              source={{
                uri: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
              }}
              style={{
                width: 25,
                height: 25,
                marginRight: 5,
              }}
            />
            <Text
              style={{
                fontWeight: "500",
                fontSize: 14,
                color: "#2f1c6a",
              }}
            >
              Login as Mazdoor
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
