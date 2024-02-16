import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import Body from "../../components/Body/Body";
import Posters from "../../components/Header/Posters";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <StatusBar translucent={true} backgroundColor="transparent" />
      <SafeAreaView style={styles.wrapper}>
        <Header />
        <Search />
      </SafeAreaView>
      <Body />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    paddingTop: 30,
  },
});

export default Home;
