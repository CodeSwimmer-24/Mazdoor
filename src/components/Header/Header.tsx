import { View, StyleSheet, SafeAreaView, Image, Text } from "react-native";
import React, { useEffect, useState } from "react";
import {
  BellIcon,
  GlobeEuropeAfricaIcon,
} from "react-native-heroicons/outline";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Header = () => {
  const [photo, setPhoto] = useState("");
  const getPhoto = async () => {
    const photo: any = await AsyncStorage.getItem("photo");
    setPhoto(photo);
  };
  useEffect(() => {
    getPhoto();
  }, []);
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Image
          source={{
            uri: photo,
          }}
          style={{ height: 32, width: 32, borderRadius: 50, marginRight: 5 }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.locationText}>Welcome To Mazdoor App</Text>
          <Text style={styles.currentLocation}>Fahad Mahmood</Text>
        </View>
        <BellIcon size={30} color="#21005d" style={styles.notification} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    paddingTop: 10,
  },
  styleIcon: {
    height: 35,
    width: 35,
    padding: 5,
  },
  notification: {
    marginRight: 5,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  textContainer: {
    marginLeft: 5,
    flex: 1,
  },
  locationText: {
    color: "grey",
    fontSize: 12,
  },
  currentLocation: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#21005d",
  },
});

export default Header;
