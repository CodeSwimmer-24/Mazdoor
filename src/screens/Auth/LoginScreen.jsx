import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import axios from "axios";
import { BASE_URL } from "../../axios/axios";
import AsyncStorage from "@react-native-community/async-storage";
import { Switch } from "react-native-paper";
import Logo from "../../assets/logo.png";

import useUserStore from "../../store/store";
import LoginCarousel from "./LoginCarousel";

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

  return (
    <>
      <View
        style={{
          height: "100%",
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            height: 400,
          }}
        >
          <LoginCarousel />
        </View>
        <View
          style={{
            marginTop: 50,
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              fontSize: 28,
              fontWeight: "700",
              color: "#333333",
              fontFamily: "Poppins",
            }}
          >
            Welcome to 👋
            <Text
              style={{
                fontSize: 30,
                fontWeight: "700",
                letterSpacing: 1,
                color: "#2f1c6a",
                fontFamily: "Poppins",
              }}
            >
              DigiMazdoor !{" "}
            </Text>
            Explore, Connect, and Enjoy.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => onGoogleButtonPress(getLoggedIn)}
          style={style.logoContainer}
        >
          <Image
            source={{
              uri: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
            }}
            style={style.googleLogo}
          />
          <Text style={style.text}>Login with Google</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={style.loginService}>
          <Text style={style.loginServiceText}>
            Login as a Service Provider !
          </Text>

          <Text style={style.loginServiceButton}>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          </Text>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor: "white",
  },
  logo: {
    height: 200,
    width: 200,
  },

  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff", // Google Blue
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 65,
    paddingRight: 65,
    borderRadius: 50,
    backgroundColor: "#2f1c6a",
    marginTop: 40,
    marginHorizontal: 20,
    elevation: 10,
  },
  googleLogo: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "400",
  },
  loginService: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 25,
  },
  loginServiceText: {
    fontSize: 14,
    color: "gray",
    marginRight: 5,
  },
  loginServiceButton: {
    fontWeight: "900",
    fontSize: 14,
    color: "#673de6",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    width: "100%",
    height: "50%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
