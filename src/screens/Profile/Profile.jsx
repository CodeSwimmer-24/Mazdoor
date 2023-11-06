import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  CreditCardIcon,
  MapPinIcon,
  PhoneIcon,
  ShareIcon,
} from "react-native-heroicons/outline";
import { LockClosedIcon, PencilIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { BASE_URL } from "../../axios/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";

const Profile = () => {
  const navigation = useNavigation();
  const [localEmail, setLocalEmail] = useState("");

  const [data, setData] = useState("");

  const getEmail = async () => {
    const value = await AsyncStorage.getItem("email");
    setLocalEmail(value);
  };
  console.log(localEmail, "Hollaaaa");

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      await auth().signOut();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEmail();
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

  return (
    <View style={{ backgroundColor: "white" }}>
      <View>
        <Image
          style={{ width: "100%", height: "50%" }}
          source={{
            uri: "https://img.freepik.com/premium-vector/paint-repair-team-decorative-repairment-plaster-house-room-craftsman-master-renovate-putty-wall-apartment-process-maintenance-builder_81894-10269.jpg?w=2000",
          }}
        />
        <Image
          source={{
            uri: "https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=",
          }}
          style={{
            height: 100,
            width: 100,
            borderRadius: 100,
            position: "absolute",
            top: 160,
            left: "38%",
          }}
        />

        <Text
          style={{
            fontSize: 28,
            fontWeight: 700,
            textAlign: "center",
            marginTop: 35,
            color: "#343434",
          }}
        >
          {data.name}
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
              {data.address}
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
            navigation.navigate("editProfile", {
              emailId: data.emailId,
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
            marginBottom: 15,
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

export default Profile;

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
