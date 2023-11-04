import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { CheckBadgeIcon, TicketIcon } from "react-native-heroicons/solid";

const ServiceList = ({
  serviceName,
  id,
  workingHours,
  price,
  serviceDescription,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        style={isPressed === true ? style.container1 : style.container}
      >
        <View style={style.subContainer}>
          <View style={{ width: "80%" }} key={id}>
            <Text style={style.serviceName}>{serviceName}</Text>
            <Text style={style.serviceDetails}>{serviceDescription}</Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={style.serviceDetails}>{workingHours}</Text>
              <Text style={style.currencyColor}>
                {" "}
                <Currency quantity={price} currency="INR" />
              </Text>
            </View>
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
    </ScrollView>
  );
};

const style = StyleSheet.create({
  serviceName: {
    fontSize: 18,
    fontWeight: "400",
    marginBottom: 3,
  },
  serviceDetails: {
    fontSize: 12,
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
    fontSize: 14,
    marginLeft: 10,
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
