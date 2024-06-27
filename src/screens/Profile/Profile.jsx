import {
  ActivityIndicator,
  Image,
  Modal,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import Woodwork from "../../assets/profileBanner.png";

import {
  MapPinIcon,
  PhoneIcon,
  ChatBubbleLeftEllipsisIcon,
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
import ShareModel from "./ShareModel";

const Profile = () => {
  const navigation = useNavigation();
  const [localEmail, setLocalEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [editModal, setEditModel] = useState(false);
  const [shareModal, setShareModel] = useState(false);
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  const getUserData = async () => {
    try {
      const email = await AsyncStorage.getItem("email");
      const photo = await AsyncStorage.getItem("photo");
      setLocalEmail(email);
      setPhoto(photo);
    } catch (err) {
      console.error("Error fetching user data:", err);
    }
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
      await AsyncStorage.multiRemove(["email", "photo", "name"]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      await getUserData();
      if (localEmail.length) {
        try {
          const response = await axios.get(
            `${BASE_URL}/getProfile?emailId=${localEmail}`
          );
          setData(response.data);
        } catch (error) {
          console.error("Error fetching profile data:", error);
        }
      }
      setLoading(false);
    };

    fetchProfile();
  }, [localEmail]);

  const closeEditModel = useCallback(() => setEditModel(false), []);
  const closeShareModel = useCallback(() => setShareModel(false), []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#673de6" />
      </View>
    );
  }

  return (
    <>
      <ScrollView style={styles.container}>
        <StatusBar translucent={true} backgroundColor="transparent" />
        <View>
          <Image style={styles.bannerImage} source={Woodwork} />
          <Image source={{ uri: photo }} style={styles.profileImage} />
          <Text style={styles.nameText}>{data.name || "Your Name"}</Text>
          <Text style={styles.emailText}>{localEmail}</Text>
          <View style={styles.infoContainer}>
            <View style={styles.infoItem}>
              <MapPinIcon color="#673de6" size={12} />
              <Text style={styles.infoText}>
                {data.address?.buildingAddress || "Please enter Area"},
                {data.address?.area || "Please enter Area"}
              </Text>
            </View>
            <View style={styles.infoItem}>
              <PhoneIcon color="#673de6" size={12} />
              <Text style={styles.infoText}>{data.contactNo}</Text>
            </View>
          </View>
        </View>
        <View style={styles.menuContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("subscribe")}
            style={[styles.menuItem, styles.subscription]}
          >
            <View style={styles.menuItemContent}>
              <Image
                source={{
                  uri: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-icon.png",
                }}
                style={styles.menuIcon}
              />
              <View>
                <Text style={styles.menuTitle}>Subscriptions</Text>
                <Text style={styles.menuSubtitle}>Please select your plan</Text>
              </View>
            </View>
            <View>
              <Text style={styles.menuPrice}>₹ 29</Text>
              <Text style={styles.menuSubtitle}>Per Month</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setEditModel(true)}
            style={[styles.menuItem, styles.editProfile]}
          >
            <View style={styles.menuItemContent}>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/9977/9977360.png",
                }}
                style={styles.menuIcon}
              />
              <View>
                <Text style={styles.menuTitle}>Edit Profile</Text>
                <Text style={styles.menuSubtitle}>
                  Make changes to profile details
                </Text>
              </View>
            </View>
            <PencilIcon
              size={22}
              color="#663c00"
              style={styles.menuIconRight}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setShareModel(true)}
            style={[styles.menuItem, styles.shareApp]}
          >
            <View style={styles.menuItemContent}>
              <Image
                source={{
                  uri: "https://i.pinimg.com/736x/8e/e9/89/8ee989250f90578d44d8888286aaa2c0.jpg",
                }}
                style={styles.menuIcon}
              />
              <View>
                <Text style={styles.menuTitle}>Share App</Text>
                <Text style={styles.menuSubtitle}>
                  Share this application with friends
                </Text>
              </View>
            </View>
            <ShareIcon
              size={22}
              color="rgb(3, 169, 244)"
              style={styles.menuIconRight}
            />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.menuItem, styles.contactCompany]}>
            <View style={styles.menuItemContent}>
              <Image
                source={{
                  uri: "https://cdn-icons-png.freepik.com/512/6070/6070926.png",
                }}
                style={styles.menuIcon}
              />
              <View>
                <Text style={styles.menuTitle}>Contact Company</Text>
                <Text style={styles.menuSubtitle}>
                  Share this application with friends
                </Text>
              </View>
            </View>
            <ChatBubbleLeftEllipsisIcon
              size={22}
              color="#673de5"
              style={styles.menuIconRight}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={signOut}
            style={[styles.menuItem, styles.logout]}
          >
            <View style={styles.menuItemContent}>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/657/657803.png",
                }}
                style={styles.menuIcon}
              />
              <Text style={styles.menuTitle}>Log Out</Text>
            </View>
            <LockClosedIcon
              size={22}
              color="rgb(239, 83, 80)"
              style={styles.menuIconRight}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      {editModal && (
        <EditProfile
          emailId={data.emailId}
          userName={data.name}
          phone={data.contactNo}
          address={data.address || "Enter Area"}
          callbackFunction={setData}
          editModal={editModal}
          setEditModel={closeEditModel}
        />
      )}
      {shareModal && (
        <ShareModel shareModal={shareModal} setShareModel={closeShareModel} />
      )}
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  bannerImage: {
    width: "100%",
    height: 250,
  },
  profileImage: {
    height: 90,
    width: 90,
    borderRadius: 100,
    position: "absolute",
    top: 180,
    left: "38%",
  },
  nameText: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 30,
    color: "#241c6a",
  },
  emailText: {
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    marginTop: 2,
    color: "#241c6a",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  infoText: {
    fontSize: 12,
    fontWeight: "300",
    textAlign: "center",
    marginTop: 2,
    color: "#241c6a",
    marginLeft: 2,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  menuContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    marginLeft: 10,
    padding: 10,
    borderRadius: 7,
    marginTop: 20,
    elevation: 2,
  },
  subscription: {
    backgroundColor: "#dcf8c6",
  },
  editProfile: {
    backgroundColor: "#fff4e5",
  },
  shareApp: {
    backgroundColor: "#e5f6fd",
  },
  contactCompany: {
    backgroundColor: "#E6E6FA",
  },
  logout: {
    backgroundColor: "#fdeded",
    marginBottom: 15,
  },
  menuItemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuIcon: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  menuIconRight: {
    marginRight: 15,
  },
  menuTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#241c6a",
  },
  menuSubtitle: {
    fontSize: 10,
    fontWeight: "300",
    color: "#241c6a",
  },
  menuPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4caf50",
  },
});
