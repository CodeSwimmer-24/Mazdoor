import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/tabs/Tabs";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { useEffect, useState } from "react";
import { Button } from "react-native-paper";
import LoginScreen from "./src/screens/Auth/LoginScreen";

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

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

  const onGoogleButtonPress = async () => {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const user_signIn = auth().signInWithCredential(googleCredential);
    // console.log(user_signIn);
    user_signIn
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      await auth().signOut();
    } catch (err) {
      console.log(err);
    }
  };

  if (initializing) return null;

  if (!user) {
    return <LoginScreen onGoogleButtonPress={onGoogleButtonPress} />;
  } else {
    return (
      <NavigationContainer>
        {/* <Button onPress={signOut}>Logout</Button> */}
        <Tabs email={user.email} name={user.displayName} />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
