import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../axios/axios";
import AsyncStorage from "@react-native-community/async-storage";
import Logo from "../../assets/logo.png";
import useUserStore from "../../store/store";

const LoginScreen = ({ onGoogleButtonPress, callbackFunction }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [role, setRole] = useState("customer");
  const checkNewUser = useUserStore((state) => state.checkNewUser);

  const getLoggedIn = async (email, name) => {
    try {
      const loginResp = await axios.post(`${BASE_URL}/login`, {
        emailId: email,
        role: role,
        name: name,
      });
      checkNewUser(loginResp.data.isNewUser);

      const profileResp = await axios.get(
        `${BASE_URL}/getProfile?emailId=${email}`
      );
      callbackFunction(profileResp.data.role);
      AsyncStorage.setItem("role", profileResp.data.role);
    } catch (error) {
      console.error(error);
    }
  };

  const showAlert = () => {
    Alert.alert(
      "User Confirmation",
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
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={Logo} style={styles.logo} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              setRole("customer");
              onGoogleButtonPress(getLoggedIn);
            }}
            style={[styles.button, styles.googleButton]}
          >
            <Image
              style={styles.icon}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png",
              }}
            />
            <Text style={styles.buttonText}>Continue with Google</Text>
          </TouchableOpacity>
          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line} />
          </View>
          <TouchableOpacity
            onPress={() => {
              setRole("mazdoor");
              showAlert();
            }}
            style={[
              styles.button,
              styles.googleButton,
              {
                marginTop: 30,
                backgroundColor: "#241c6a1a",
                elevation: 0,
              },
            ]}
          >
            <Image
              style={styles.icon}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png",
              }}
            />
            <Text
              style={[
                styles.buttonText,
                {
                  color: "#241c6a",
                  fontSize: 14,
                },
              ]}
            >
              Mazdoor Login Service
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },
  content: {
    justifyContent: "center",
    height: "90%",
  },
  logo: {
    width: "100%",
    height: "20%",
    marginLeft: 20,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    padding: 12,
    justifyContent: "center",
    borderRadius: 5,
    elevation: 5,
  },
  googleButton: {
    backgroundColor: "#2f1c6a",
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 15,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 14,
    color: "white",
    fontWeight: "400",
  },
  orContainer: {
    width: "60%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "lightgray",
    marginHorizontal: 10,
  },
  orText: {
    fontSize: 16,
    color: "gray",
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  footerText: {
    color: "#505050",
    fontSize: 14,
    fontWeight: "300",
  },
});

export default LoginScreen;
