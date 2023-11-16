import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  CalendarDaysIcon,
  CreditCardIcon,
  MapPinIcon,
  PhoneIcon,
  ShareIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import { LockClosedIcon, PencilIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { BASE_URL } from "../../../axios/axios";

const SpProfile = () => {
  const navigation = useNavigation();
  const [localEmail, setLocalEmail] = useState("");
  const [photo, setPhoto] = useState("");

  const [data, setData] = useState("");

  const getEmail = async () => {
    const value = await AsyncStorage.getItem("email");
    setLocalEmail(value);
  };

  const getPhoto = async () => {
    const photo = await AsyncStorage.getItem("photo");
    setPhoto(photo);
  };

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      await auth().signOut();
      await AsyncStorage.removeItem("email");
      await AsyncStorage.removeItem("photo");
      await AsyncStorage.removeItem("name");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEmail();
    getPhoto();
  }, []);

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

  console.log(data.name);

  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <View>
        <Image
          style={{ width: "100%", height: "50%" }}
          source={{
            uri: "https://img.freepik.com/premium-vector/man-has-repaired-old-house-rent_701961-3369.jpg",
          }}
        />
        <Image
          source={{
            uri: photo,
          }}
          style={{
            height: 90,
            width: 90,
            borderRadius: 100,
            position: "absolute",
            top: 170,
            left: "38%",
          }}
        />

        <Text
          style={{
            fontSize: 28,
            fontWeight: 700,
            textAlign: "center",
            marginTop: 30,
            color: "#343434",
          }}
        >
          {data.name === undefined ? "Your Name" : data.name}
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontWeight: 400,
            textAlign: "center",
            marginTop: 2,
            color: "#343434",
          }}
        >
          {localEmail}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MapPinIcon color="#21005d" size={12} />
            <Text
              style={{
                fontSize: 12,
                fontWeight: 300,
                textAlign: "center",
                marginTop: 2,
                color: "#343434",
                marginLeft: 2,
              }}
            >
              Near old Masjid,Delhi
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <PhoneIcon color="#21005d" size={12} />
            <Text
              style={{
                fontSize: 12,
                fontWeight: 300,
                textAlign: "center",
                marginTop: 2,
                color: "#343434",
                marginLeft: 2,
              }}
            >
              {data.contactNo}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CreditCardIcon color="#21005d" size={12} />
            <Text
              style={{
                fontSize: 12,
                fontWeight: 300,
                textAlign: "center",
                marginTop: 2,
                color: "#343434",
                marginLeft: 2,
              }}
            >
              {data.aadharNo}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <UserIcon color="#21005d" size={12} />
            <Text
              style={{
                fontSize: 12,
                fontWeight: 300,
                textAlign: "center",
                marginTop: 2,
                color: "#343434",
                marginLeft: 2,
              }}
            >
              {data.age} - {data.gender}ale
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <CalendarDaysIcon color="#21005d" size={12} />
            <Text
              style={{
                fontSize: 12,
                fontWeight: 300,
                textAlign: "center",
                marginTop: 2,
                color: "#343434",
                marginLeft: 2,
              }}
            >
              {data.dob}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: -90 }}>
        {/* Subscription */}

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("subscribe");
          }}
          style={styles.menuContainer}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              <Image
                source={{
                  uri: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-icon.png",
                }}
                style={{ height: 30, width: 30, marginRight: 10 }}
              />
            </View>
            <View>
              <Text
                style={{ fontSize: 14, fontWeight: "bold", color: "#343434" }}
              >
                Subscriptions
              </Text>
              <Text
                style={{ fontSize: 10, fontWeight: "300", color: "#343434" }}
              >
                please Select your plan
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#4caf50" }}
            >
              ₹ 29
            </Text>
            <Text style={{ fontSize: 10, fontWeight: "300", color: "#343434" }}>
              Per Month
            </Text>
          </View>
        </TouchableOpacity>

        {/* Edit Profile */}

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("spEditProfile", {
              emailId: data.emailId,
              userName: data.name,
              phone: data.contactNo,
              aadharNo: data.aadharNo,
              age: data.age,
              dob: data.dob,
              address: data.address,
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
            padding: 10,
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
                Edit Profile
              </Text>
              <Text
                style={{ fontSize: 10, fontWeight: "300", color: "#343434" }}
              >
                Make changes to profile details
              </Text>
            </View>
          </View>
          <View style={{ marginRight: 15 }}>
            <PencilIcon size={22} color="#663c00" />
          </View>
        </TouchableOpacity>

        {/* Share */}

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("share");
          }}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "95%",
            backgroundColor: "#e5f6fd",
            marginLeft: 10,
            padding: 10,
            borderRadius: 7,
            marginTop: 15,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              <Image
                source={{
                  uri: "https://i.pinimg.com/736x/8e/e9/89/8ee989250f90578d44d8888286aaa2c0.jpg",
                }}
                style={{ height: 30, width: 30, marginRight: 10 }}
              />
            </View>
            <View>
              <Text
                style={{ fontSize: 14, fontWeight: "bold", color: "#343434" }}
              >
                Share App
              </Text>
              <Text
                style={{ fontSize: 10, fontWeight: "300", color: "#343434" }}
              >
                Share this application with Friends
              </Text>
            </View>
          </View>
          <View style={{ marginRight: 15 }}>
            <ShareIcon size={22} color="rgb(3, 169, 244)" />
          </View>
        </TouchableOpacity>

        {/* Logout */}
        <TouchableOpacity
          onPress={signOut}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "95%",
            backgroundColor: "#fdeded",
            marginLeft: 10,
            padding: 10,
            borderRadius: 7,
            marginTop: 15,
            elevation: 5, // Set the elevation to control the shadow depth
            shadowColor: "rgba(0, 0, 0, 1)", // The shadow color with opacity
            shadowOffset: { width: 0, height: 5 }, // Horizontal and vertical shadow offset
            shadowRadius: 15, // Radius of the shadow
            borderRadius: 5, // Radius of the border
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View>
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/657/657803.png",
                  }}
                  style={{ height: 30, width: 30, marginRight: 10 }}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#343434",
                  }}
                >
                  Log Out
                </Text>
              </View>
            </View>
          </View>
          <View style={{ marginRight: 15 }}>
            <LockClosedIcon size={22} color="rgb(239, 83, 80)" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SpProfile;

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "95%",
    backgroundColor: "#4caf501a",
    marginLeft: 10,
    padding: 10,
    marginTop: 12,
    borderRadius: 7,
  },
});
