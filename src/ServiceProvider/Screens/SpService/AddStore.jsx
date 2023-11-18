import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";
import { Appbar } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import { BASE_URL } from "../../../axios/axios";

const AddStore = () => {
  const {
    params: { emailId, callbackFunction, storeTitle, storeDesc, type },
  } = useRoute();
  const [title, setTitle] = useState("");
  const [shortDis, setShortDis] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [address, setAddress] = useState("");
  const navigation = useNavigation();

  const handleSubmit = () => {
    axios
      .post(`${BASE_URL}/addServiceProvider`, {
        emailId: "techpedia.tech24@gmail.com",
        short_description: shortDis,
        title: title,
        serviceType: serviceType,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
            value={title}
            onChangeText={(store) => {
              setTitle(store);
            }}
            placeholder="Please Enter Your Contact No"
            style={style.inputBox}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={style.label}>Service Type</Text>
          <TextInput
            keyboardType="name-phone-pad"
            value={serviceType}
            onChangeText={(type) => {
              setServiceType(type);
            }}
            placeholder="Please Enter Your Contact No"
            style={style.inputBox}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={style.label}>Short Description</Text>
          <TextInput
            keyboardType="name-phone-pad"
            value={shortDis}
            onChangeText={(dis) => {
              setShortDis(dis);
            }}
            placeholder="Please Enter Your Contact No"
            style={style.inputBox}
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
});

export default AddStore;
