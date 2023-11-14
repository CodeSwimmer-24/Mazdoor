import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { BookmarkIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
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
    axios
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
    <View style={style.container}>
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
        style={style.containerButton}
      >
        <BookmarkIcon color="#fff" size={25} />
        <Text style={style.text}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    zIndex: 50,
  },
  containerButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#21005d",
    marginLeft: 20,
    marginRight: 20,
    padding: 12,
    borderRadius: 10,
  },
  text: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 15,
    paddingLeft: 10,
  },
});

export default BookingButton;
