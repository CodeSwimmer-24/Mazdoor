import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Button,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import { BASE_URL } from "../../../axios/axios";

const EditProfile = () => {
  const navigation = useNavigation();
  const {
    params: {
      emailId,
      callbackFunction,
      userName,
      phone,
      aadharNo,
      age,
      dob,
      address,
    },
  } = useRoute();

  const [name, setName] = useState(userName);
  const [phoneNo, setPhoneNo] = useState(phone);
  const [spAddress, setSpAddress] = useState(address);
  const [spAge, setSpAge] = useState(age);
  const [spDob, setSPDob] = useState(dob);
  const [spAadharNo, setSpAadharNo] = useState(aadharNo);

  const handleSubmit = () => {
    axios
      .post(`${BASE_URL}/updateProfile`, {
        emailId: emailId,
        gender: "M",
        name: name,
        contactNo: phoneNo,
        age: spAge,
        dob: spDob,
        aadharNo: spAadharNo,
      })
      .then((resp) => {
        console.log(resp.data, "post Edit");
      })
      .catch((err) => {
        console.log(err.message, "Error");
      });
    callbackFunction({
      name,
      contactNo: phoneNo,
      age: spAge,
      gender: "M",
      dob: spDob,
      aadharNo: spAadharNo,
      emailId: emailId,
    });

    navigation.navigate("SpProfile");
  };
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={{ padding: 20 }}>
        <Text
          style={{
            marginTop: 20,
            marginBottom: 10,
            fontSize: 25,
            fontWeight: "700",
            color: "#21005d",
          }}
        >
          Enter Your Details ✍🏻
        </Text>
        <View style={{ marginTop: 0 }}>
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
        <View style={{ marginTop: 20 }}>
          <Text style={style.label}>Phone No</Text>
          <TextInput
            keyboardType="phone-pad"
            value={phoneNo}
            onChangeText={(phone) => {
              setPhoneNo(phone);
            }}
            placeholder="Please Enter Your Contact No"
            style={style.inputBox}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={style.label}>Aadhar Card</Text>
          <TextInput
            keyboardType="number-pad"
            value={spAadharNo}
            onChangeText={(aadharNo) => {
              setSpAadharNo(aadharNo);
            }}
            placeholder="Please Enter Your Aadhar Card No"
            style={style.inputBox}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={style.label}>Age</Text>
          <TextInput
            keyboardType="number-pad"
            value={spAge}
            onChangeText={(age) => {
              setSpAge(age);
            }}
            placeholder="Please Enter Your Age"
            style={style.inputBox}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={style.label}>Address/Locality</Text>
          <TextInput
            value={spAddress}
            onChangeText={(address) => {
              setSpAddress(address);
            }}
            placeholder="Please Enter Your Address"
            style={style.inputBox}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={style.label}>Date Of Berth</Text>
          <TextInput
            value={spDob}
            onChangeText={(dob) => {
              setSPDob(dob);
            }}
            placeholder="Please Enter Your Full DOB"
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
    </ScrollView>
  );
};

const style = StyleSheet.create({
  label: {
    padding: 4,
    marginLeft: 3,
    fontSize: 12,
    fontWeight: "500",
    color: "#21005d",
  },
  inputBox: {
    borderWidth: 1,
    borderColor: "lightgray",
    paddingLeft: 12,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 6,
  },
});

export default EditProfile;
