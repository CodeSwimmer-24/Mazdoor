import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { BookmarkIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";
import { client } from "../../client";
import { BASE_URL } from "../../axios/axios";

const BookingButton = ({
  name,
  title,
  address,
  email,
  age,
  contactNo,
  gender,
}) => {
  const navigation = useNavigation();
  const [subscription, setSubscription] = useState(false);

  const getUserEmailId = () => {
    return AsyncStorage.getItem("email");
  };

  const getSubscription = (userEmail) => {
    client
      .get(`${BASE_URL}/getUserSubscription?emailId=${userEmail}`)
      .then((res) => {
        console.log(res.data);
        setSubscription(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserEmailId().then((email) => {
      getSubscription(email);
    });
  }, []);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Modal", {
          name,
          title,
          address,
          email,
          age,
          contactNo,
          gender,
          subscription,
        });
      }}
      style={{
        width: "48%",
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "#673de7",
        paddingVertical: 12,
        borderRadius: 50,
        elevation: 6,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontWeight: "700",
          fontSize: 15,
          color: "white",
        }}
      >
        Book Now
      </Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({});

export default BookingButton;
