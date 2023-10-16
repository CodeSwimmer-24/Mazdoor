import { View, StyleSheet, SafeAreaView, Image, Text } from "react-native";
import React from "react";
import {
  BellIcon,
  GlobeEuropeAfricaIcon,
} from "react-native-heroicons/outline";

const Header = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <GlobeEuropeAfricaIcon size={30} color="#21005d" />
        <View style={styles.textContainer}>
          <Text style={styles.locationText}>Current Location</Text>
          <Text style={styles.currentLocation}>Shaheen Baaghe</Text>
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
