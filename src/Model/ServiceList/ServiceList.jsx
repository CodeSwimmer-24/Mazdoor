import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { ClockIcon } from "react-native-heroicons/outline";

const ServiceList = () => {
  const {
    params: { service },
  } = useRoute();

  console.log(service);

  return (
    <ScrollView style={style.container}>
      <Text style={{ fontSize: 20, fontWeight: "500", color: "#241c6a" }}>
        Services Provided
      </Text>
      {service.map((service, index) => {
        return (
          <View
            key={index}
            style={{
              paddingTop: 15,
              borderBottomWidth: 1,
              borderBottomColor: "lightgray",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <ClockIcon color="red" size={20} />
              <Text
                style={{
                  color: "red",
                  fontWeight: "700",
                  fontSize: 14,
                  marginLeft: 5,
                }}
              >
                {service.workingHours}
              </Text>
            </View>
            <Text
              style={{
                color: "#241c6a",
                fontSize: 22,
                fontWeight: "700",
                padding: 5,
              }}
            >
              {service.serviceName}
            </Text>
            <Text
              style={{
                color: "rgb(76, 175, 80)",
                fontWeight: "700",
                paddingBottom: 5,
                paddingLeft: 5,
                fontSize: 20,
              }}
            >
              ₹ {service.price}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "300",
                paddingLeft: 5,
                paddingBottom: 5,
              }}
            >
              {service.serviceDescription}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: "#ffff",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "65%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 20,
  },
});

export default ServiceList;

// serviceName, serviceDescription, workingHours, price
