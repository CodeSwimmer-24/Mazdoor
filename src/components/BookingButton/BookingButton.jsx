import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { BookmarkIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

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
    bottom: 25,
    width: "100%",
    zIndex: 50,
  },
  containerButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#21005d",
    marginLeft: 25,
    marginRight: 25,
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
