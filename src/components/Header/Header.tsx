import { View, StyleSheet, SafeAreaView, Image, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { BellIcon, BookmarkIcon } from "react-native-heroicons/outline";
import AsyncStorage from "@react-native-community/async-storage";

const Header = () => {
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");

  console.log(photo, name);

  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem("photo").then((photoValue: any) =>
        setPhoto((_) => photoValue)
      );
      AsyncStorage.getItem("name").then((nameValue: any) =>
        setName((_) => nameValue)
      );
    }, 1000);
  }, []);

  console.log(name);
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Image
          source={{
            uri: photo,
          }}
          style={{ height: 35, width: 35, borderRadius: 50, marginRight: 5 }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.locationText}>Welcome 👋</Text>
          <Text style={styles.currentLocation}>{name}</Text>
        </View>
        <BellIcon size={24} color="#241c6a" style={styles.notification} />
        <BookmarkIcon size={24} color="#241c6a" style={styles.notification} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    paddingTop: 10,
    marginLeft: 10,
    marginRight: 10,
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
    color: "#241c6a",
  },
});

export default Header;
