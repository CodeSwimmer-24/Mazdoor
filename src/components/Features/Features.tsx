import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";

import TopServices from "./TopServices/TopServices";

const Features = () => {
  return (
    <ScrollView>
      {/* -------- Electronic Repair ------- */}
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Our Top Services</Text>
          <ArrowRightIcon size={25} color="#21005d" />
        </View>
        <Text style={styles.description}>
          Here are some top services for you
        </Text>
        <ScrollView style={styles.box}>
          <TopServices />
        </ScrollView>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 10,
    paddingLeft: 2,
  },
  description: {
    marginLeft: 10,
    color: "gray",
    paddingLeft: 2,
    paddingBottom: 5,
  },
  container: {
    marginTop: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
  },
  box: {
    paddingTop: 4,
  },
});

export default Features;
