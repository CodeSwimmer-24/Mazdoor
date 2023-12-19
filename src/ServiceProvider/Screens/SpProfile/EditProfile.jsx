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
import { Dropdown } from "react-native-element-dropdown";
import { MapIcon } from "react-native-heroicons/solid";

const data = [
  { label: "Shaheen Bagh", value: "Shaheen Bagh" },
  { label: "Batla House", value: "Batla House" },
  { label: "Okkhala", value: "Okkhala" },
  { label: "Jamia Nagar", value: "Jamia nagar" },
];

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
  const [area, setArea] = useState(address.area);
  const [buildingAddress, setBuildingAddress] = useState(
    address.buildingAddress
  );

  const handleSubmit = () => {
    axios
      .put(`${BASE_URL}/updateProfile`, {
        emailId: emailId,
        gender: "M",
        name: name,
        contactNo: phoneNo,
        age: spAge,
        dob: spDob,
        aadharNo: spAadharNo,
        role: "mazdoor",
        address: {
          area: area,
          buildingAddress: buildingAddress,
        },
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
      address: {
        area: area,
        buildingAddress: buildingAddress,
      },
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
            color: "#673de6",
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
        <View style={{ marginTop: 10 }}>
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
        <View style={{ marginTop: 10 }}>
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
        <View style={{ marginTop: 10 }}>
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
        <View style={{ marginTop: 10 }}>
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
        <View style={{ marginTop: 10 }}>
          <Text style={style.label}>Shop Address</Text>
          <TextInput
            value={buildingAddress}
            onChangeText={(address) => {
              setBuildingAddress(address);
            }}
            placeholder="Please Enter Shop Address"
            style={style.inputBox}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={style.label}>Area</Text>
          <Dropdown
            style={style.dropdown}
            placeholderStyle={style.placeholderStyle}
            selectedTextStyle={style.selectedTextStyle}
            iconStyle={style.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select Area"
            value={area}
            onChange={(item) => {
              setArea(item.value);
            }}
            renderLeftIcon={() => (
              <MapIcon
                style={style.icon}
                color="#673de6"
                opacity={0.5}
                name="Safety"
                size={18}
              />
            )}
          />
        </View>

        <View style={{ marginTop: 10 }}>
          <Button
            disabled={!phoneNo}
            onPress={handleSubmit}
            title="Submit Changes"
            color="#673de6"
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
    color: "#673de6",
  },
  inputBox: {
    borderWidth: 1,
    borderColor: "lightgray",
    paddingLeft: 12,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 6,
  },
  dropdown: {
    height: 40,
    width: "100%",
    borderColor: "lightgray",
    borderWidth: 0.5,
    padding: 8,
    borderRadius: 6,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 14,
    color: "gray",
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
  },
});

export default EditProfile;
