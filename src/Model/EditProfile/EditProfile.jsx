import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import { BASE_URL } from "../../axios/axios";
import { Dropdown } from "react-native-element-dropdown";
import { Button } from "react-native";

const data = [
  { label: "ShahenBag", value: "Shahen Bag" },
  { label: "Batla-Hous", value: "Batla House" },
  { label: "Millat-Nagar", value: "Millat Nagar" },
  { label: "Okkhla", value: "Okkhla" },
  { label: "Jami-nagar", value: "Jamia-nagar" },
];

const EditProfile = () => {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState(null);

  const {
    params: { emailId, callbackFunction },
  } = useRoute();

  const navigation = useNavigation();

  console.log(emailId);

  const handleSubmit = () => {
    axios
      .post(`${BASE_URL}/updateProfile`, {
        emailId: emailId,
        gender: "M",
        name: name,
        contactNo: phoneNo,
      })
      .then((resp) => {
        console.log(resp.data, "post Edit");
      })
      .catch((err) => {
        console.log(err.message, "Error");
      });
    callbackFunction({ name, contactNo: phoneNo });
    setName("");
    setPhoneNo(null);
    navigation.navigate("profile");
  };

  return (
    <View style={style.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "700",
          color: "#343434",
          textAlign: "center",
        }}
      >
        Edit Profile
      </Text>
      <View style={{ marginTop: 20 }}>
        <Text style={style.label}>Full Name</Text>
        <TextInput
          value={name}
          onChangeText={(newName) => {
            setName(newName);
          }}
          placeholder="Please Enter Your Full Name"
          style={style.inputBox}
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={style.label}>Contact Number</Text>
        <TextInput
          value={phoneNo}
          onChangeText={(phone) => {
            setPhoneNo(phone);
          }}
          placeholder="Please Enter Your Phone Number"
          style={style.inputBox}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Button
          disabled={!phoneNo}
          onPress={handleSubmit}
          title="Submit Changes"
          color="#21005d"
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: "#ffff",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "60%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 20,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: "lightgray",
    paddingLeft: 12,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 6,
  },
  label: {
    padding: 4,
    marginLeft: 3,
    fontSize: 12,
    fontWeight: "300",
    color: "#21005d",
  },
  dropdown: {
    borderRadius: 6,
    borderColor: "lightgray",
    borderWidth: 1,
    paddingLeft: 12,
    paddingTop: 4,
    paddingBottom: 4,
    color: "#21005d",
    paddingRight: 10,
    fontSize: 10,
  },
  placeholderStyle: {
    fontSize: 14,
    color: "#808080",
  },
  selectedTextStyle: {
    fontSize: 14,
  },
});

export default EditProfile;
