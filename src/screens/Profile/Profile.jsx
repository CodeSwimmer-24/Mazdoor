import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Appbar,
  Avatar,
  Title,
  Caption,
  TouchableRipple,
  Button,
} from "react-native-paper";
import {
  Cog6ToothIcon,
  CreditCardIcon,
  EnvelopeIcon,
  HeartIcon,
  MapIcon,
  PhoneIcon,
  ShareIcon,
  UserCircleIcon,
  CurrencyRupeeIcon,
  PencilIcon,
  ArrowLeftOnRectangleIcon,
  Cog8ToothIcon,
} from "react-native-heroicons/outline";
import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Appbar.Header>
        <Appbar.BackAction />
        <Appbar.Content title="Profile" />
        <Appbar.Action icon="pencil" />
      </Appbar.Header>

      <SafeAreaView style={styles.container}>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <Avatar.Image
              source={{
                uri: "https://api.adorable.io/avatars/80/abott@adorable.png",
              }}
              size={80}
            />
            <View style={{ marginLeft: 20 }}>
              <Title
                style={[
                  styles.title,
                  {
                    marginTop: 15,
                    marginBottom: 5,
                  },
                ]}
              >
                John Doe
              </Title>
              <Caption style={styles.caption}>@j_doe</Caption>
            </View>
          </View>
        </View>

        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <MapIcon color="#777777" size={20} />
            <Text style={{ color: "#777777", marginLeft: 20 }}>
              Kolkata, India
            </Text>
          </View>
          <View style={styles.row}>
            <PhoneIcon color="#777777" size={20} />
            <Text style={{ color: "#777777", marginLeft: 20 }}>
              +91-900000009
            </Text>
          </View>
          <View style={styles.row}>
            <EnvelopeIcon color="#777777" size={20} />
            <Text style={{ color: "#777777", marginLeft: 20 }}>
              john_doe@email.com
            </Text>
          </View>
        </View>

        {/* <View style={styles.infoBoxWrapper}>
          <View
            style={[
              styles.infoBox,
              {
                flexDirection: "row",
              },
            ]}
          >
            <Text
              style={{
                marginRight: 10,
                fontSize: 26,
                color: "#21005d",
              }}
            >
              ₹
            </Text>
            <Text
              style={{ fontSize: 26, fontWeight: "bold", color: "#21005d" }}
            >
              29/-
            </Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={{ fontSize: 16 }}>0</Text>
            <Caption>Bookings</Caption>
          </View>
        </View> */}

        <View style={styles.menuWrapper}>
          <TouchableRipple
            onPress={() => {
              navigation.navigate("subscribe");
            }}
          >
            <View style={styles.menuItem}>
              <CreditCardIcon color="#21005d" size={25} />
              <Text style={styles.menuItemText}>Payment</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple>
            <View style={styles.menuItem}>
              <ShareIcon color="#21005d" size={25} />
              <Text style={styles.menuItemText}>Tell Your Friends</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <UserCircleIcon color="#21005d" size={25} />
              <Text style={styles.menuItemText}>Support</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Cog8ToothIcon color="#21005d" size={25} />
              <Text style={styles.menuItemText}>Setting</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <PencilIcon color="#21005d" size={25} />
              <Text style={styles.menuItemText}>Edit Profile</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <ArrowLeftOnRectangleIcon color="#21005d" size={25} />
              <Text style={styles.menuItemText}>Logout</Text>
            </View>
          </TouchableRipple>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  userInfoSection: {
    paddingHorizontal: 25,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  infoBoxWrapper: {
    flexDirection: "row",
    height: 60,
    shadowColor: "#52006A",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 65,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 5,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    paddingHorizontal: 25,
  },
  menuItemText: {
    color: "#21005d",
    marginLeft: 20,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 26,
  },
});

export default Profile;
