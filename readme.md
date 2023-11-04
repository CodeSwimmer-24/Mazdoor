<!-- import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/tabs/Tabs";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { SetStateAction, useEffect, useState } from "react";
import { Button } from "react-native-paper";

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  GoogleSignin.configure({
    webClientId:
      "580588662021-qcdl96d7gu010208onu1og0asf1okugb.apps.googleusercontent.com",
  });
  function onAuthStateChange(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscribe = auth().onAuthStateChanged(onAuthStateChange);
    return subscribe;
  }, []);

  const onGoogleButtonPress = async () => {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredetial = auth.GoogleAuthProvider.credential(idToken);
    const user_signIn = auth().signInWithCredential(googleCredetial);
    user_signIn
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
    // return auth().signInWithCredential(googleCredetial);
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await auth().signOut();
    } catch (err) {
      console.log(err);
    }
  };

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <GoogleSigninButton
          style={{ width: 300, height: 65, marginTop: 200 }}
          onPress={onGoogleButtonPress}
        />
      </View>
    );
  } else {
    return (
      <NavigationContainer>
        <Button style={{ marginTop: 20 }} onPress={signOut}>
          SIGNOUT
        </Button>
        <Tabs />
        {/* <StackNavigation /> */}
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
}); -->
