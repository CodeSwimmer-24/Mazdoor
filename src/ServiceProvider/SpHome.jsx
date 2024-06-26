import { View, Text } from "react-native";
import React from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { Button } from "react-native-paper";
import AsyncStorage from "@react-native-community/async-storage";
import auth from "@react-native-firebase/auth";

const SpHome = () => {
  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      await auth().signOut();
      await AsyncStorage.removeItem("email");
      await AsyncStorage.removeItem("photo");
      await AsyncStorage.removeItem("name");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View>
      <Text>SpHome</Text>
      <Button onPress={signOut}>SIGNOUT</Button>
    </View>
  );
};

export default SpHome;
