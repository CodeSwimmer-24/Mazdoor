import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import axios from "axios";
import { BASE_URL } from "../../axios/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Switch } from "react-native-paper";

const LoginScreen = ({ onGoogleButtonPress, callbackFunction }) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const [role, setRole] = useState("customer");

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
      .then((resp) => {
        console.log(resp, "post login");
      });
    await axios.get(`${BASE_URL}/getProfile?emailId=${email}`).then((resp) => {
      console.log(resp.data.role, " ----- From Login Page----");
      callbackFunction(resp.data.role);
      AsyncStorage.setItem("role", resp.data.role);
    });
  };

  return (
    <View style={style.container}>
      <View style={style.centeredView}>
        <Image
          style={style.logo}
          source={{
            uri: "https://i.pinimg.com/originals/f2/be/76/f2be7614ec79765c62723d75b233683e.jpg",
          }}
        />
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
      <View style={style.loginService}>
        <Text style={style.loginServiceText}>
          Login as a Service Provider !
        </Text>
        <Text style={style.loginServiceButton}>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </Text>
      </View>
    </View>
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
    borderRadius: 4,
    marginTop: -25,
    backgroundColor: "#673de6",
  },
  googleLogo: {
    width: 28,
    height: 28,
    marginRight: 20,
  },
  text: {
    color: "#fff",
    fontSize: 16,
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
});

export default LoginScreen;
