import {
  Image,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

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
import AsyncStorage from "@react-native-community/async-storage";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import EditProfile from "../../Model/EditProfile/EditProfile";

const Profile = () => {
  const navigation = useNavigation();
  const [localEmail, setLocalEmail] = useState("");
  const [photo, setPhoto] = useState("");

  const [editModal, setEditModel] = useState(false);

  const [data, setData] = useState("");

  const getEmail = async () => {
    const value = await AsyncStorage.getItem("email");
    setLocalEmail(value);
  };

  const getPhoto = async () => {
    const photo = await AsyncStorage.getItem("photo");
    setPhoto(photo);
  };

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "flex",
      },
    });
  }, [navigation]);

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

  const closeEditModel = (value) => {
    setEditModel(value);
  };

  const openModelScreen = () => {
    return (
      <EditProfile
        emailId={data.emailId}
        userName={data.name}
        phone={data.contactNo}
        address={data.address === undefined ? "Enter Area" : data.address}
        callbackFunction={setData}
        editModal={editModal}
        setEditModel={closeEditModel}
      />
    );
  };

  return (
    <>
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <StatusBar translucent={true} backgroundColor="transparent" />
        <View>
          <Image
            style={{ width: "100%", height: 250 }}
            source={{
              uri: "https://img.freepik.com/premium-vector/man-has-repaired-old-house-rent_701961-837.jpg",
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
              marginTop: 20,
              color: "#241c6a",
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
              color: "#241c6a",
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
              <MapPinIcon color="#673de6" size={12} />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 300,
                  textAlign: "center",
                  marginTop: 2,
                  color: "#241c6a",
                  marginLeft: 2,
                }}
              >
                {data.address === undefined || data.address === null
                  ? "Please enter Area"
                  : data.address.area}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 10,
              }}
            >
              <PhoneIcon color="#673de6" size={12} />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 300,
                  textAlign: "center",
                  marginTop: 2,
                  color: "#241c6a",
                  marginLeft: 2,
                }}
              >
                {data.contactNo}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            // marginTop: -90,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Subscription */}

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("subscribe");
            }}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "90%",
              backgroundColor: "#dcf8c6",
              marginLeft: 10,
              padding: 10,
              borderRadius: 7,
              marginTop: 20,
              elevation: 2,
            }}
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
                  style={{ fontSize: 14, fontWeight: "bold", color: "#241c6a" }}
                >
                  Subscriptions
                </Text>
                <Text
                  style={{ fontSize: 10, fontWeight: "300", color: "#241c6a" }}
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
              <Text
                style={{ fontSize: 10, fontWeight: "300", color: "#241c6a" }}
              >
                Per Month
              </Text>
            </View>
          </TouchableOpacity>

          {/* Edit Profile */}

          <TouchableOpacity
            // onPress={() => {
            //   navigation.navigate("editProfile", {
            //     emailId: data.emailId,
            //     userName: data.name,
            //     phone: data.contactNo,
            //     address: data.address === undefined ? "Enter Area" : data.address,
            //     callbackFunction: setData,
            //   });
            // }}
            onPress={() => setEditModel(true)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "90%",
              backgroundColor: "#fff4e5",
              marginLeft: 10,
              padding: 10,
              borderRadius: 7,
              marginTop: 20,
              elevation: 2,
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
                  style={{ fontSize: 14, fontWeight: "bold", color: "#241c6a" }}
                >
                  Edit Profile
                </Text>
                <Text
                  style={{ fontSize: 10, fontWeight: "300", color: "#241c6a" }}
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
              width: "90%",
              backgroundColor: "#e5f6fd",
              marginLeft: 10,
              padding: 10,
              borderRadius: 7,
              marginTop: 20,
              elevation: 2,
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
                  style={{ fontSize: 14, fontWeight: "bold", color: "#241c6a" }}
                >
                  Share App
                </Text>
                <Text
                  style={{ fontSize: 10, fontWeight: "300", color: "#241c6a" }}
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
              width: "90%",
              backgroundColor: "#fdeded",
              marginLeft: 10,
              padding: 10,
              borderRadius: 7,
              marginTop: 20,
              marginBottom: 15,
              elevation: 2,
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
                      color: "#241c6a",
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
      {openModelScreen()}
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",

    backgroundColor: "#4caf501a",
    marginLeft: 10,
    padding: 10,
    borderRadius: 7,
  },
});
