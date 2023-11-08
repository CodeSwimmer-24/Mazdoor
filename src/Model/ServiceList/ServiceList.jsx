import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const ServiceList = () => {
  const {
    params: { service },
  } = useRoute();

  console.log(service);

  return (
    <ScrollView style={style.container}>
      <Text style={{ fontSize: 20, fontWeight: "500", color: "#343434" }}>
        Services Provided
      </Text>
      {service.map((service, index) => {
        return (
          <View
            key={index}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderRadius: 6,
              padding: 15,
              marginTop: 5,
              marginBottom: 5,
              elevation: 5,
              shadowColor: "rgba(0, 0, 0, 0.15)",
              shadowOffset: { width: 10, height: 5 },
              shadowRadius: 15,
              shadowOpacity: 1,
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                  color: "#343434",
                }}
              >
                {service.serviceName}
              </Text>
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 14,
                  fontWeight: "300",
                }}
              >
                {service.serviceDescription}
              </Text>
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "#21005d",
                  opacity: 0.8,
                }}
              >
                ₹ {service.price}
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 12, fontWeight: "300" }}>
                {service.workingHours}
              </Text>
            </View>
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
