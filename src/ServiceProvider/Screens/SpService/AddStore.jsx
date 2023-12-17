import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Appbar } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import { BASE_URL } from "../../../axios/axios";
import { Dropdown } from "react-native-element-dropdown";
import { ClipboardIcon, WrenchIcon } from "react-native-heroicons/solid";

const data = [
  { label: "Available", value: true },
  { label: "Un Available", value: false },
];
const data2 = [
  { label: "Available", value: true },
  { label: "Un Available", value: false },
];

const AddStore = () => {
  const {
    params: {
      title,
      short_description,
      emailId,
      serviceType,
      availability,
      callbackFunction,
    },
  } = useRoute();
  const [userTitle, setUserTitle] = useState(title);
  const [shortDis, setShortDis] = useState(short_description);
  const [type, setType] = useState(serviceType);
  const navigation = useNavigation();
  const [email, setEmail] = useState(emailId);
  const [userAva, setUserAva] = useState(availability);
  const [getServiceType, setGetServiceType] = useState([]);

  const handleSubmit = () => {
    axios
      .post(`${BASE_URL}/addServiceProvider`, {
        emailId: email,
        short_description: shortDis,
        title: userTitle,
        serviceType: type,
        availability: userAva,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    callbackFunction({
      title: userTitle,
      short_description: shortDis,
      serviceType: type,
      emailId: emailId,
      availability: userAva,
    });
    navigation.navigate("SpService");
  };

  return (
    <ScrollView
      style={{
        backgroundColor: "white",
      }}
    >
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.navigate("SpService");
          }}
        />
        <Appbar.Content title="Add/Edit Store Details" />
      </Appbar.Header>
      <View
        style={{
          padding: 20,
        }}
      >
        <View style={{ marginTop: 20 }}>
          <Text style={style.label}>Store Name</Text>
          <TextInput
            keyboardType="name-phone-pad"
            value={userTitle}
            onChangeText={(store) => {
              setUserTitle(store);
            }}
            placeholder="Please Enter Your Contact No"
            style={style.inputBox}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <View style={{ marginTop: 10 }}>
            <Text style={style.label}>Your Service Type</Text>
            <Dropdown
              style={style.dropdown}
              placeholderStyle={style.placeholderStyle}
              selectedTextStyle={style.selectedTextStyle}
              iconStyle={style.iconStyle}
              data={data2}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Service Type"
              value={type}
              onChange={(item) => {
                setType(item.value);
              }}
              renderLeftIcon={() => (
                <WrenchIcon
                  style={style.icon}
                  color="#21005d"
                  opacity={0.5}
                  name="Safety"
                  size={18}
                />
              )}
            />
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={style.label}>Short Description</Text>
          <TextInput
            keyboardType="name-phone-pad"
            value={shortDis}
            onChangeText={(des) => {
              setShortDis(des);
            }}
            placeholder="Please Enter Your Contact No"
            style={style.inputBox}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={style.label}>Your Availability</Text>
          <Dropdown
            style={style.dropdown}
            placeholderStyle={style.placeholderStyle}
            selectedTextStyle={style.selectedTextStyle}
            iconStyle={style.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select Availability"
            value={userAva}
            onChange={(item) => {
              setUserAva(item.value);
            }}
            renderLeftIcon={() => (
              <ClipboardIcon
                style={style.icon}
                color="#21005d"
                opacity={0.5}
                name="Safety"
                size={18}
              />
            )}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Button
            disabled={!title && !shortDis && !serviceType}
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

export default AddStore;
