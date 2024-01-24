import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/tabs/Tabs";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { useEffect, useState } from "react";
import { Button } from "react-native-paper";
import LoginScreen from "./src/screens/Auth/LoginScreen";
import AsyncStorage from "@react-native-community/async-storage";
import SpHome from "./src/ServiceProvider/SpHome";
import SpTabs from "./src/tabs/SpTabs";

interface userType {
  email: string;
  displayName: string;
}

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<userType>({ email: "", displayName: "" });

  const [userRole, setUserRole] = useState("");

  const getRole = async () => {
    const userRole: any = await AsyncStorage.getItem("role");
    setUserRole(userRole);
  };

  useEffect(() => {
    getRole();
  }, []);

  GoogleSignin.configure({
    webClientId:
      "580588662021-qcdl96d7gu010208onu1og0asf1okugb.apps.googleusercontent.com",
  });
  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }
  useEffect(() => {
    const subscribe = auth().onAuthStateChanged(onAuthStateChanged);
    return subscribe;
  }, []);

  const callbackFunction = (role: Function) => {
    setUserRole(role);
  };

  const onGoogleButtonPress = async (callbackFunction: Function) => {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const user_signIn = auth().signInWithCredential(googleCredential);
    // console.log(user_signIn);
    user_signIn
      .then((user) => {
        callbackFunction(user.user.email, user.user.displayName);

        // update the state
        setUser({
          email: user.user.email || "",
          displayName: user.user.displayName || "",
        });
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (initializing) return null;

  const setLocalEmail = async () => {
    try {
      await AsyncStorage.setItem("email", user.email);
      await AsyncStorage.setItem("photo", user.photoURL);
      await AsyncStorage.setItem("name", user.displayName);
      console.log("SETTING EVERYTHING YOOOOO");
    } catch (err) {
      console.log(err);
    }
  };

  if (user?.email != undefined) {
    setLocalEmail();
  }

  if (!user) {
    return (
      <LoginScreen
        onGoogleButtonPress={onGoogleButtonPress}
        callbackFunction={callbackFunction}
      />
    );
  } else {
    return (
      <NavigationContainer>
        {userRole === "mazdoor" ? <SpTabs /> : <Tabs email={user.email} />}
      </NavigationContainer>
    );
  }
}
