import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Button,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar } from "react-native-paper";
import { ShareIcon, UserIcon, UsersIcon } from "react-native-heroicons/outline";
import { TextInput } from "react-native-paper";
import { BASE_URL } from "../../axios/axios";
import axios from "axios";
import { useRoute } from "@react-navigation/native";

import { Dropdown } from "react-native-element-dropdown";
import { MapPinIcon } from "react-native-heroicons/solid";

const data = [
  { label: "ShahenBag", value: "Shahen Bag" },
  { label: "Batla-Hous", value: "Batla House" },
  { label: "Millat-Nagar", value: "Millat Nagar" },
  { label: "Okkhla", value: "Okkhla" },
  { label: "Jami-nagar", value: "Jamia-nagar" },
];

const EditProfile = () => {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState();
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState(null);

  const {
    params: { emailId },
  } = useRoute();

  const handleSubmit = () => {
    axios
      .post(`${BASE_URL}/updateProfile`, {
        emailId: emailId,
        address: address,
        gender: "M",
        name: name,
        contactNo: phoneNo,
      })
      .then((resp) => {
        console.log(resp.data, "post login");
      })
      .catch((err) => {
        console.log(err.message);
      });
    setName("");
    setPhoneNo();
    setGender("");
    setAddress("");
  };

  return (
    <View style={{ backgroundColor: "transparent", height: "100%" }}>
      <Appbar.Header style={{ backgroundColor: "transparent" }}>
        <Appbar.BackAction />
        <Appbar.Content title="Edit Profile" />
      </Appbar.Header>
      <ImageBackground
        source={{
          uri: "https://previews.123rf.com/images/elenavdovina/elenavdovina1701/elenavdovina170100004/68249853-construction-tools-background-seamless-white-vector-seamless-pattern-with-linear-icons-of-building.jpg",
        }}
        style={{
          flex: 1,
          resizeMode: "cover",
          zIndex: -10,
          opacity: 0.2,
          height: "100%",
        }}
      />
      <ScrollView
        style={{ padding: 20, position: "absolute", top: 80, width: "100%" }}
      >
        <Text
          style={{
            fontSize: 22,
            marginLeft: 20,
            fontWeight: "700",
            color: "#21005d",
          }}
        >
          Enter your details
        </Text>
        <TextInput
          label="User Name"
          left={<TextInput.Icon icon="account" color="#21005d" />}
          style={{
            marginTop: 20,
            backgroundColor: "transparent",
          }}
          value={name}
          onChangeText={(newName) => {
            setName(newName);
          }}
        />
        <TextInput
          label="Phone Number"
          left={<TextInput.Icon icon="phone" color="#21005d" />}
          style={{
            marginTop: 20,
            backgroundColor: "transparent",
          }}
          value={phoneNo}
          onChangeText={(newPhoneNumber) => {
            setPhoneNo(newPhoneNumber);
          }}
        />
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select item"
          searchPlaceholder="Search..."
          value={address}
          onChange={(item) => {
            setAddress(item.value);
          }}
          renderLeftIcon={() => (
            <MapPinIcon
              style={styles.icon}
              color="#21005d"
              name="Safety"
              size={25}
            />
          )}
        />
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity
            style={{
              height: 40,
              width: 150,
              backgroundColor: "#007fff",
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                padding: 8,
                textAlign: "center",
                fontSize: 18,
                fontWeight: "bold",
                color: "white",
              }}
            >
              M
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              width: 150,
              backgroundColor: "#ffc0cb",
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                padding: 8,
                textAlign: "center",
                fontSize: 18,
                fontWeight: "bold",
                color: "#FF69B4",
              }}
            >
              F
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#21005d",
            width: "98%",
            marginLeft: 5,
            padding: 12,
            borderRadius: 10,
            marginTop: 30,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#FFFFFF",
              fontWeight: "600",
              fontSize: 15,
              paddingLeft: 10,
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    borderRadius: 10,
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "gray",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});

export default EditProfile;
