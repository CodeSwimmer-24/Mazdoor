import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { Image } from "react-native";
import axios from "axios";
import { BASE_URL } from "../../axios/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ onGoogleButtonPress }) => {
  const getLoggedIn = async (email, name) => {
    console.log(email, name, "From Login");

    await axios
      .post(`${BASE_URL}/login`, {
        emailId: email,
        role: "customer",
        name: name,
      })
      .then((resp) => {
        console.log(resp, "post login");
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
        <Text style={style.loginServiceButton}>Login</Text>
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
    paddingLeft: 55,
    paddingRight: 55,
    borderRadius: 4,
    marginTop: -25,
    backgroundColor: "#21005d",
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
    color: "#21005d",
  },
});

export default LoginScreen;
