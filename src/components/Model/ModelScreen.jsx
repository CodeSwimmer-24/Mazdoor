import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import {
  CreditCardIcon,
  ClipboardDocumentIcon,
} from "react-native-heroicons/solid";
import { CalculatorIcon, CheckIcon } from "react-native-heroicons/solid";
import axios from "axios";
import { BASE_URL } from "../../axios/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ModelScreen = () => {
  const {
    params: { name, email, age, contactNo, gender, subscription },
  } = useRoute();
  // const [subscribe, setSubscribe] = useState(subscription);
  const [userEmail, setUserEmail] = useState("");
  const navigation = useNavigation();

  const getEmailFromLocal = async () => {
    try {
      const userEmail = await AsyncStorage.getItem("email");
      setUserEmail(userEmail);
    } catch (err) {
      console.log(err);
    }
  };

  const timeStamp = new Date();

  var dd = String(timeStamp.getDate()).padStart(2, "0");
  var mm = String(timeStamp.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = timeStamp.getFullYear();
  const todayDate = yyyy + "-" + mm + "-" + dd;

  var time =
    timeStamp.getHours() +
    ":" +
    timeStamp.getMinutes() +
    ":" +
    timeStamp.getSeconds();

  const handleBooking = () => {
    try {
      axios
        .post(`${BASE_URL}/addBooking`, {
          bookingDesc: "",
          bookingTimestamp: timeStamp,
          userEmailId: userEmail,
          spEmailId: email,
          date: todayDate,
          time: time,
        })
        .then((resp) => {
          console.log(resp, "SUCESSFULLLLLLL");
        });
      navigation.navigate("booking");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEmailFromLocal();
  }, []);

  console.log(email, userEmail);

  const makePhoneCall = (contactNo) => {
    const phoneURL = `tel:${contactNo}`;
    Linking.openURL(phoneURL).catch((error) => {
      console.error(`Failed to open the phone app: ${error}`);
    });
  };

  const handleWhatsAppPress = () => {
    const deepLink = `whatsapp://send?phone=${contactNo}`;
    Linking.openURL(deepLink)
      .then((data) => console.log("WhatsApp opened", data))
      .catch(() => console.log("Error opening WhatsApp"));
  };

  return (
    <SafeAreaView style={style.container}>
      <View>
        {subscription ? (
          <>
            <View>
              <Text style={style.title}>About Your Service Provider</Text>

              <View
                style={{
                  margin: 10,
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
                    <Text
                      style={{
                        fontSize: 20,
                        color: "#343434",
                        fontWeight: "700",
                      }}
                    >
                      {name}
                    </Text>
                  </View>
                  <View style={{ marginTop: 5 }}>
                    <View style={style.personalInfo}>
                      <Text style={style.infoText}>
                        {age} - {gender}ale
                      </Text>
                    </View>
                    <TouchableOpacity style={style.personalInfo}>
                      <Text style={style.infoText}>+91 {contactNo}</Text>
                      <ClipboardDocumentIcon
                        color="#21005d"
                        opacity={0.8}
                        style={{ marginLeft: 10 }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            <View style={style.buttonsContainer}>
              <TouchableOpacity
                onPress={handleWhatsAppPress}
                style={style.whatsApp}
              >
                <Image
                  source={{
                    uri: "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-mobile-software-icon-png-image_6315991.png",
                  }}
                  style={{ height: 25, width: 25 }}
                />
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: 15,
                    marginLeft: 5,
                    color: "#075e54",
                  }}
                >
                  WhatsApp
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => makePhoneCall(contactNo)}
                style={style.call}
              >
                <Image
                  source={{
                    uri: "https://companieslogo.com/img/orig/TRUE-B.ST-e8d1a343.png?t=1664646245",
                  }}
                  style={{ height: 30, width: 30 }}
                />
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: 15,
                    marginLeft: 5,
                    color: "#009eff",
                  }}
                >
                  Call Now
                </Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <View style={{ justifyContent: "center" }}>
            <Image
              style={{
                height: 140,
                width: 140,
                marginLeft: 110,
              }}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/8132/8132825.png",
              }}
            />
            <Text
              style={{
                marginLeft: 20,
                marginTop: 5,
                fontWeight: "400",
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
                marginTop: 5,
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
      {subscription ? (
        <TouchableOpacity
          onPress={() => {
            handleBooking();
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
    height: "48%",
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
  title: {
    marginLeft: 20,
    marginTop: 0,
    fontSize: 14,
    fontWeight: "700",
    color: "#21005d",
  },
  infoText: {
    fontSize: 14,
    color: "#343434",
    fontWeight: "500",
    marginBottom: 5,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 30,
    paddingLeft: 8,
    paddingRight: 8,
  },
  whatsApp: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dcf8c6",
    paddingLeft: 35,
    paddingRight: 35,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 5,
  },
  call: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d2ebff",
    paddingLeft: 35,
    paddingRight: 35,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 5,
  },
});

export default ModelScreen;
