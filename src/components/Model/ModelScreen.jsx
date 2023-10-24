import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import {
  CreditCardIcon,
  EnvelopeIcon,
  FaceSmileIcon,
  MapIcon,
  UserIcon,
  PhoneIcon,
} from "react-native-heroicons/outline";
import { CheckIcon } from "react-native-heroicons/solid";

const ModelScreen = () => {
  const [subscribe, setSubscribe] = useState(false);
  const navigation = useNavigation();
  const {
    params: { name, title, address, email, age, contactNo, gender },
  } = useRoute();
  return (
    <SafeAreaView style={style.container}>
      <View>
        <Text
          style={{
            padding: 20,
            fontSize: 22,
            fontWeight: "600",
            color: "black",
          }}
        >
          {title}
        </Text>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginLeft: 15 }}
        >
          <MapIcon color="#21005d" />
          <Text style={{ fontSize: 14, fontWeight: "600", paddingLeft: 10 }}>
            Near Jama Masjid Sakchi
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 5,
            alignItems: "center",
            marginLeft: 15,
          }}
        >
          <EnvelopeIcon color="#21005d" />
          <Text style={{ fontSize: 14, fontWeight: "600", paddingLeft: 10 }}>
            {email}
          </Text>
        </View>
        {subscribe ? (
          <>
            <View>
              <Text
                style={{
                  marginLeft: 20,
                  marginTop: 20,
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#21005d",
                }}
              >
                About Your Service Provider
              </Text>

              <View
                style={{
                  margin: 20,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ height: 80, width: 80, borderRadius: 50 }}
                  source={{
                    uri: "https://economictimes.indiatimes.com/thumb/msid-88760386,width-1200,height-900,resizemode-4,imgsize-30906/kovid-kapoor-twitter.jpg?from=mdr",
                  }}
                />
                <View style={{ marginLeft: 10 }}>
                  <View style={style.personalInfo}>
                    <UserIcon size={20} color="#21005d" />
                    <Text
                      style={{
                        fontSize: 17,
                        color: "#6750a4",
                        fontWeight: "500",
                        paddingLeft: 10,
                      }}
                    >
                      {name}
                    </Text>
                  </View>
                  <View style={style.personalInfo}>
                    <PhoneIcon size={20} color="#21005d" />
                    <Text
                      style={{
                        fontSize: 17,
                        color: "#6750a4",
                        fontWeight: "500",
                        paddingLeft: 10,
                        marginTop: 5,
                      }}
                    >
                      {contactNo}
                    </Text>
                  </View>
                  <View style={style.personalInfo}>
                    <FaceSmileIcon size={20} color="#21005d" />
                    <Text
                      style={{
                        fontSize: 17,
                        color: "#6750a4",
                        fontWeight: "500",
                        paddingLeft: 10,
                        marginTop: 5,
                      }}
                    >
                      {age} - {gender}ale
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ padding: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "#dcf8c6",
                  paddingLeft: 40,
                  paddingRight: 40,
                  paddingTop: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBottom: 10,
                  borderRadius: 5,
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ height: 25, width: 25 }}
                  source={{
                    uri: "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-mobile-software-icon-png-image_6315991.png",
                  }}
                />
                <Text
                  style={{
                    color: "#075e54",
                    fontSize: 16,
                    fontWeight: "bold",
                    marginLeft: 8,
                  }}
                >
                  What's App
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "#e7feff",
                  paddingLeft: 40,
                  paddingRight: 40,
                  paddingTop: 10,
                  paddingBottom: 10,
                  borderRadius: 5,
                  alignItems: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Image
                  style={{ height: 25, width: 25 }}
                  source={{
                    uri: "https://companieslogo.com/img/orig/TRUE-B.ST-e8d1a343.png?t=1664646245",
                  }}
                />
                <Text
                  style={{
                    color: "#318ce7",
                    fontSize: 16,
                    fontWeight: "bold",
                    marginLeft: 8,
                  }}
                >
                  Call Me Now
                </Text>
              </View>
            </View>
          </>
        ) : (
          <View style={{ justifyContent: "center" }}>
            <Image
              style={{ height: 180, width: 180, marginLeft: 80, marginTop: 20 }}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/8132/8132825.png",
              }}
            />
            <Text
              style={{
                marginLeft: 20,
                marginTop: 20,
                fontWeight: "300",
                fontSize: 14,
                color: "gray",
              }}
            >
              It seems that you haven't subscribed to our plan, for booking the
              user and to get the contact details you must subscribe.{" "}
            </Text>
            <Text
              style={{
                marginLeft: 20,
                marginTop: 10,
                fontWeight: "700",
                fontSize: 20,
                color: "#21005d",
              }}
            >
              Please subscribe @ ₹ 29/-
            </Text>
          </View>
        )}
      </View>
      {subscribe ? (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("booking");
          }}
          style={style.containerButton}
        >
          <CheckIcon color="#fff" size={25} />

          <Text style={style.text}>Confirm Booking</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("subscribe");
          }}
          style={[
            style.containerButton,
            {
              backgroundColor: "#fd5e53",
            },
          ]}
        >
          <CreditCardIcon color="#fff" size={25} />

          <Text style={style.text}>Please subscribe</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "80%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  personalInfo: {
    flexDirection: "row",
    marginTop: 0,
    alignItems: "center",
    marginLeft: 15,
  },
  containerButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#21005d",
    position: "absolute",
    bottom: 20,
    width: "95%",
    marginLeft: 8,
    padding: 12,
    borderRadius: 10,
  },
  text: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 15,
    paddingLeft: 10,
  },
});

export default ModelScreen;
