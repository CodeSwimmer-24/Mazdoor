import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { ChevronRightIcon } from "react-native-heroicons/outline";

const Services = () => {
  const services = ["Plumber", "Carpenter", "Electrician"];
  return (
    <View>
      {services.map((service) => {
        return (
          <TouchableOpacity style={style.container}>
            <Text style={style.serviceName}>{service}</Text>
            <ChevronRightIcon size={26} color="#21005d" />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
    marginTop: 15,
    height: 70,
    width: "90%",
    marginLeft: 15,
    backgroundColor: "rgb(231, 224, 236)",
    borderRadius: 10,
  },
  serviceName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#21005d",
    flex: 1,
    paddingLeft: 20,
  },
});
export default Services;
