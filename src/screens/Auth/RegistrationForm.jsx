import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef } from "react";
import Tabs from "../../tabs/Tabs";
import useUserStore from "../../store/store";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native";
import {
  UserIcon,
  PhoneIcon,
  MapPinIcon,
  MapIcon,
} from "react-native-heroicons/outline";
import axios from "axios";
import { BASE_URL } from "../../axios/axios";
import { Dropdown } from "react-native-element-dropdown";

const data = [
  { label: "Shaheen Bagh", value: "Shaheen Bagh" },
  { label: "Batla House", value: "Batla House" },
  { label: "Okkhala", value: "Okkhala" },
  { label: "Jamia Nagar", value: "Jamia nagar" },
];

const RegistrationForm = ({ email }) => {
  const checkNewUser = useUserStore((state) => state.checkNewUser);
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [bldAddress, setBldAddress] = useState("");
  const [area, setArea] = useState("");

  console.log(email);
  const handleSubmit = (email) => {
    axios
      .put(`${BASE_URL}/updateProfile`, {
        emailId: email,
        gender: "M",
        name: name,
        contactNo: phoneNo,
        role: "customer",
        address: {
          area: area,
          buildingAddress: bldAddress,
          city: "Delhi",
          exactLocation: "c",
          locality: "None",
          region: "Ookhala",
        },
      })
      .then((resp) => {
        console.log(resp.data, "post Edit");
      })
      .catch((err) => {
        console.log(err.message, "Error");
      });
    checkNewUser(false);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View
            style={{
              textAlign: "left",
              marginTop: 90,
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                marginBottom: 0,
                fontWeight: "300",
                color: "#673de6",
              }}
            >
              Welcome to DigiMazdoor 👋
            </Text>
            <Text
              style={{
                fontSize: 32,
                fontWeight: "700",
                color: "#2f1c6a",
                marginBottom: 20,
              }}
            >
              Register Your New Account
            </Text>
          </View>
        </View>

        <View style={style.searchSection}>
          <UserIcon size={20} color="gray" />
          <TextInput
            value={name}
            onChangeText={(newName) => {
              setName(newName);
            }}
            style={style.input}
            placeholder="Full Name"
          />
        </View>
        <View style={style.searchSection}>
          <PhoneIcon size={20} color="gray" />
          <TextInput
            keyboardType="number-pad"
            value={phoneNo}
            onChangeText={(phone) => {
              setPhoneNo(phone);
            }}
            style={style.input}
            placeholder="Phone Number"
          />
        </View>
        <View style={style.searchSection}>
          <MapIcon size={20} color="gray" />
          <TextInput
            value={bldAddress}
            onChangeText={(add) => {
              setBldAddress(add);
            }}
            style={style.input}
            placeholder="Address"
          />
        </View>
        <View style={style.searchSection}>
          <Dropdown
            style={style.input}
            placeholderStyle={style.placeholderStyle}
            selectedTextStyle={style.selectedTextStyle}
            iconStyle={style.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select Locality"
            value={area}
            onChange={(item) => {
              setArea(item.value);
            }}
            renderLeftIcon={() => (
              <MapPinIcon
                style={style.icon}
                color="gray"
                name="Safety"
                size={20}
              />
            )}
          />
        </View>
        <TouchableOpacity
          onPress={() => handleSubmit(email)}
          style={style.button}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "500",
              fontSize: 15,
              color: "white",
            }}
          >
            Register Now
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  searchSection: {
    marginHorizontal: 20,
    marginVertical: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    paddingLeft: 10,
  },

  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: "#F0F0F0",
    color: "#424242",
    borderRadius: 8,
    underlineColorAndroid: "yourDesiredColor", // Change this to the color you want
    selectionColor: "yourDesiredColor",
  },
  button: {
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#673de7",
    paddingVertical: 12,
    borderRadius: 50,
  },
  placeholderStyle: {
    color: "#424242",
    fontSize: 14,
    opacity: 0.5,
  },
  selectedTextStyle: {
    fontSize: 12,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 12,
  },
  icon: {
    marginRight: 5,
    marginLeft: -10,
  },
});

export default RegistrationForm;

// onPress={() => checkNewUser(false)}
