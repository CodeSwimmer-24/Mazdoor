import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import AsyncStorage from "@react-native-community/async-storage";
import Toast from "react-native-toast-message";

import LoginScreen from "./src/screens/Auth/LoginScreen";
import Tabs from "./src/tabs/Tabs";
import SpTabs from "./src/tabs/SpTabs";

interface UserType {
  email: string;
  displayName: string;
}

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<UserType>({ email: "", displayName: "" });
  const [userRole, setUserRole] = useState<string>("");

  useEffect(() => {
    configureGoogleSignIn();
    const unsubscribeAuth = auth().onAuthStateChanged(onAuthStateChanged);

    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    getUserRoleFromStorage();
  }, []);

  const configureGoogleSignIn = async () => {
    await GoogleSignin.configure({
      webClientId:
        "580588662021-qcdl96d7gu010208onu1og0asf1okugb.apps.googleusercontent.com",
    });
  };

  const onAuthStateChanged = (user: any) => {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  };

  const getUserRoleFromStorage = async () => {
    try {
      const storedRole = await AsyncStorage.getItem("role");
      setUserRole(storedRole || "");
    } catch (error) {
      console.log("Error fetching user role:", error);
    }
  };

  const onGoogleButtonPress = async () => {
    try {
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const signInResult = await auth().signInWithCredential(googleCredential);

      const { email, displayName } = signInResult.user || {};
      if (email && displayName) {
        setUser({ email, displayName });
        setLocalUserData(email, displayName);
      }
    } catch (error) {
      console.log("Google sign in error:", error);
    }
  };

  const setLocalUserData = async (email: string, displayName: string) => {
    try {
      await AsyncStorage.setItem("email", email);
      await AsyncStorage.setItem("name", displayName);
      console.log("Successfully set local user data.");
    } catch (error) {
      console.log("Error setting local user data:", error);
    }
  };

  if (initializing) {
    return null; // or a loading indicator
  }

  return (
    <NavigationContainer>
      {user ? (
        userRole === "mazdoor" ? (
          <SpTabs email={user.email} />
        ) : (
          <Tabs email={user.email} />
        )
      ) : (
        <LoginScreen onGoogleButtonPress={onGoogleButtonPress} />
      )}
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <StatusBar translucent backgroundColor="transparent" />
    </NavigationContainer>
  );
}
