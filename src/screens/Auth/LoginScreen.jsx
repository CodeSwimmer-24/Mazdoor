import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import axios from "axios";
import { BASE_URL } from "../../axios/axios";
import AsyncStorage from "@react-native-community/async-storage";
import { Switch } from "react-native-paper";
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
      <View
        style={{
          marginTop: "50%",
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
      <Modal visible={true} animationType="slide" transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
          }}
        >
          <View
            style={{
              backgroundColor: "#2f1c6a",
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              width: "100%",
              height: "30%",
              elevation: 20,
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 40,
              }}
            >
              <TouchableOpacity
                style={{
                  width: "85%",
                  paddingTop: 12,
                  paddingBottom: 12,
                  paddingLeft: 80,
                  paddingRight: 80,
                  borderRadius: 50,
                  backgroundColor: "#fff",
                  alignItems: "center",
                  justifyContent: "center",
                  elevation: 15,
                  marginBottom: 30,
                  flexDirection: "row",
                }}
                onPress={() => onGoogleButtonPress(getLoggedIn)}
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
                    fontSize: 16,
                    color: "#2f1c6a",
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
                  paddingTop: 12,
                  paddingBottom: 12,
                  paddingLeft: 80,
                  paddingRight: 80,
                  borderRadius: 50,
                  backgroundColor: "#6d6096",
                  alignItems: "center",
                  justifyContent: "center",
                  elevation: 5,
                  flexDirection: "row",
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
                    fontSize: 16,
                    color: "#fff",
                  }}
                >
                  Login as Mazdoor
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default LoginScreen;
