import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { CheckBadgeIcon, TicketIcon } from "react-native-heroicons/solid";

const ServiceList = ({
  id,
  name,
  serviceDetails,
  servicePrice,
  availability,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        style={isPressed === true ? style.container1 : style.container}
      >
        <View style={style.subContainer}>
          <View style={{ width: "80%" }} key={id}>
            <Text style={style.serviceName}>{name}</Text>
            <Text style={style.serviceDetails}>{serviceDetails}</Text>
            <Text style={style.currencyColor}>
              {" "}
              <Currency quantity={servicePrice} currency="INR" />
            </Text>
          </View>
          <View>
            <Image
              style={style.image}
              source={{
                uri: "https://thumbs.dreamstime.com/b/home-electrical-wiring-working-to-building-house-47159079.jpg",
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View style={style.selected}>
          <CheckBadgeIcon size={30} color="#21005d" />
          <Text
            style={{
              paddingLeft: 10,
              fontSize: 18,
              fontWeight: "500",
              color: "#21005d",
            }}
          >
            Service Selected
          </Text>
        </View>
      )}
    </>
  );
};

const style = StyleSheet.create({
  image: {
    height: 85,
    width: 85,
    backgroundColor: "lightgrey",
  },
  serviceName: {
    fontSize: 25,
    fontWeight: "400",
    marginBottom: 3,
  },
  serviceDetails: {
    fontSize: 14,
    fontWeight: "300",
    marginBottom: 10,
    color: "gray",
  },
  container: {
    backgroundColor: "white",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  container1: {
    backgroundColor: "white",
    padding: 15,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  currencyColor: {
    color: "gray",
    fontSize: 16,
    fontWeight: "bold",
    // fontStyle: "italic",
  },
  selected: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    backgroundColor: "white",
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: "lightgrey",
  },
});

export default ServiceList;
