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
import { useIsFocused } from "@react-navigation/native";

const SpService = () => {
  const navigation = useNavigation();
  const [localEmail, setLocalEmail] = useState("");
  const [data, setData] = useState("");
  const isFocused = useIsFocused();

  const getEmail = async () => {
    const value = await AsyncStorage.getItem("email");
    setLocalEmail(value);
  };

  useEffect(() => {
    if (isFocused) {
      if (localEmail.length) {
        axios
          .get(`${BASE_URL}/getServiceProviderDetails?emailId=${localEmail}`)
          .then((response) => {
            console.log(response.data);
            setData(response.data.serviceProvider);
          });
      }
    }
  }, [localEmail, isFocused]);

  useEffect(() => {
    getEmail();
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
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
            {data === null ? "Add Shop Name" : data.title}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: "gray",
              fontWeight: "300",
              marginBottom: 5,
            }}
          >
            {data === null ? "Email Id" : data.emailId}
          </Text>
          <Text style={{ fontSize: 12, fontWeight: "400", color: "gray" }}>
            {data === null ? "Short Description" : data.short_description}
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
                marginLeft: 5,
                fontSize: 13,
                fontWeight: "700",
                color: "#376fd0",
              }}
            >
              {data === null ? "Service Type" : data.serviceType}
            </Text>
            <Text
              style={{
                marginLeft: 10,
                fontWeight: "700",
                color: "#4caf50",
                fontSize: 14,
              }}
            >
              {data !== null && data.availability === true ? (
                "🟢 Avalabel"
              ) : (
                <Text style={{ color: "#f44336" }}>🛑 UnAvalabel</Text>
              )}
            </Text>
            <Text
              style={{
                marginLeft: 10,
                fontWeight: "700",
                color: "#f57c00",
                fontSize: 14,
              }}
            >
              🌟 {data === null ? "0" : data.rating}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SpAddStore", {
            title: data === null ? "" : data.title,
            short_description: data === null ? "" : data.short_description,
            emailId: data === null ? "" : data.emailId,
            serviceType: data === null ? "" : data.serviceType,
            availability: data === null ? "" : data.availability,
            callbackFunction: setData,
          });
        }}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "95%",
          backgroundColor: "#fff4e5",
          marginLeft: 10,
          padding: 14,
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
              style={{ fontSize: 14, fontWeight: "bold", color: "#343434" }}
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
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SpAddStore", {
            title: data === null ? "" : data.title,
            short_description: data === null ? "" : data.short_description,
            emailId: data === null ? "" : data.emailId,
            serviceType: data === null ? "" : data.serviceType,
            availability: data === null ? "" : data.availability,
            callbackFunction: setData,
          });
        }}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "95%",
          backgroundColor: "#f443361a",
          marginLeft: 10,
          padding: 14,
          borderRadius: 7,
          marginTop: 15,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/7518/7518748.png",
              }}
              style={{ height: 35, width: 35, marginRight: 10 }}
            />
          </View>
          <View>
            <Text
              style={{ fontSize: 14, fontWeight: "bold", color: "#343434" }}
            >
              Changes Availability Status
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "300", color: "#343434" }}>
              Make changes to profile details
            </Text>
          </View>
        </View>
        <View style={{ marginRight: 15 }}>
          <PencilIcon size={22} color="#f44336" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SpAddServices", {
            emailId: data === null ? "" : data.emailId,
          });
        }}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "95%",
          backgroundColor: "#376fd01a",
          marginLeft: 10,
          padding: 14,
          borderRadius: 7,
          marginTop: 15,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View>
            <Image
              source={{
                uri: "https://static9.depositphotos.com/1378583/1150/v/950/depositphotos_11501921-stock-illustration-power-tool-logo.jpg",
              }}
              style={{ height: 35, width: 35, marginRight: 10 }}
            />
          </View>
          <View>
            <Text
              style={{ fontSize: 14, fontWeight: "bold", color: "#343434" }}
            >
              Add Your Services and Pricing
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "300", color: "#343434" }}>
              Make changes to profile details
            </Text>
          </View>
        </View>
        <View style={{ marginRight: 15 }}>
          <PencilIcon size={22} color="#376fd0" />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SpService;
