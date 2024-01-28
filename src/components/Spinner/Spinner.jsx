import React from "react";
import { StyleSheet, View } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

const Spinner = () => {
  return (
    <View style={style.container}>
      <View style={style.centeredContent}>
        <ActivityIndicator animating={true} size="large" color="#673de6" />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50%",
  },
  centeredContent: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Spinner;
