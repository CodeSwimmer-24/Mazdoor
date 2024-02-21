import { View, Text } from "react-native";
import React from "react";

const ServiceList = ({ services }) => {
  console.log(services);
  return (
    <View
      style={{
        marginTop: 10,
      }}
    >
      {services.map((service, index) => {
        return (
          <View
            key={index}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              //   padding: 10,
              marginVertical: 10,
              borderRadius: 15,
              marginHorizontal: 15,
              padding: 10,
              elevation: 2,
              backgroundColor: "white",
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{
                  marginLeft: 10,
                  fontWeight: "700",
                  fontSize: 18,
                  color: "#241c6a",
                }}
              >
                {service.serviceName}
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  fontWeight: "500",
                  fontSize: 12,
                  color: "gray",
                }}
              >
                {service.serviceDescription}
              </Text>
            </View>
            <Text
              style={{
                marginRight: 10,
                fontWeight: "700",
                fontSize: 20,
                color: "#673de7",
              }}
            >
              ₹ {service.price}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default ServiceList;
