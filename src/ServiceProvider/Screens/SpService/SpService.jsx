import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import {
  BuildingStorefrontIcon,
  PencilIcon,
  WrenchIcon,
  WrenchScrewdriverIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "../../../axios/axios";

const SpService = () => {
  const navigation = useNavigation();
  const [localEmail, setLocalEmail] = useState("");
  const [data, setData] = useState("");

  const getEmail = async () => {
    const value = await AsyncStorage.getItem("email");
    setLocalEmail(value);
  };

  useEffect(() => {
    if (localEmail.length) {
      axios
        .get(`${BASE_URL}/getProfile?emailId=${localEmail}`)
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        });
    }
  }, [localEmail]);

  useEffect(() => {
    getEmail();
  }, []);

  return (
    <ScrollView>
      <View
        style={{
          marginTop: 50,
          padding: 10,
          margin: 10,
          flexDirection: "row",
          alignItems: "flex-start",
          backgroundColor: "white",
          borderRadius: 5,
        }}
      >
        <View
          style={{ backgroundColor: "#21005d", padding: 12, borderRadius: 50 }}
        >
          <BuildingStorefrontIcon size={28} color="white" />
        </View>
        <View
          style={{
            paddingLeft: 15,
            width: "85%",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "#21005d",
            }}
          >
            Aramn Plumber
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: "gray",
              fontWeight: "300",
              marginBottom: 5,
            }}
          >
            fahadmahmood1200@gmail.com
          </Text>
          <Text style={{ fontSize: 12, fontWeight: "400", color: "gray" }}>
            Hello this is arman plumbers and we provide the best plumbing
            services
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <WrenchScrewdriverIcon size={20} color="#376fd0" />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 14,
                fontWeight: "700",
                color: "#376fd0",
              }}
            >
              Plumber
            </Text>
            <Text
              style={{ marginLeft: 20, fontWeight: "700", color: "#4caf50" }}
            >
              {" "}
              🟢 Avalabel
            </Text>
            <Text
              style={{ marginLeft: 20, fontWeight: "700", color: "#f44336" }}
            >
              🌟 3.5
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SpAddStore", {
            // emailId: localEmail,
            // userName: data.name,
            // phone: data.contactNo,
            // aadharNo: data.aadharNo,
            // age: data.age,
            // dob: data.dob,
            // address: data.address,
            // callbackFunction: setData,
          });
        }}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "95%",
          backgroundColor: "#fff4e5",
          marginLeft: 10,
          padding: 20,
          borderRadius: 7,
          marginTop: 15,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/9977/9977360.png",
              }}
              style={{ height: 30, width: 30, marginRight: 10 }}
            />
          </View>
          <View>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#343434" }}
            >
              Add/Edit Store Details
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "300", color: "#343434" }}>
              Make changes to profile details
            </Text>
          </View>
        </View>
        <View style={{ marginRight: 15 }}>
          <PencilIcon size={22} color="#663c00" />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SpService;
