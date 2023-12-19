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
      <View style={{ paddingHorizontal: 10 }}>
        {subscription ? (
          <>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://cdn.create.vista.com/api/media/small/402148720/stock-photo-portrait-thoughtful-smiling-man-keeps-hand-chin-looks-directly-camera",
                }}
                style={{
                  height: 90,
                  width: 90,
                  borderRadius: 50,
                }}
              />
              <Text
                style={{
                  paddingTop: 10,
                  fontSize: 22,
                  textAlign: "center",
                  color: "#2f1c6a",
                  fontWeight: "700",
                }}
              >
                {name}
              </Text>

              <Text
                style={{
                  padding: 2,
                  fontSize: 16,
                  fontWeight: "400",
                  color: "#343434",
                }}
              >
                Hi 👋 I am {age} year old {gender}ale.
              </Text>
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
                  style={{ height: 22, width: 22 }}
                />
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: 13,
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
                  style={{ height: 22, width: 22 }}
                />
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: 13,
                    marginLeft: 5,
                    color: "#4285F4",
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
                color: "#673de6",
              }}
            >
              Please subscribe @ ₹ 29/-
            </Text>
          </View>
        )}
      </View>
      {subscription ? (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              handleBooking();
            }}
            style={style.containerButton}
          >
            <CheckIcon color="#fff" size={25} />

            <Text style={style.text}>Confirm Booking</Text>
          </TouchableOpacity>
        </View>
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
    height: "45%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  personalInfo: {
    flexDirection: "column",
    marginTop: 0,
    alignItems: "center",
    marginLeft: 15,
  },
  containerButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#673de6",
    marginTop: 20,
    width: "92%",
    // marginLeft: 8,

    padding: 12,
    borderRadius: 50,
    elevation: 10,
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
    color: "#673de6",
  },
  infoText: {
    fontSize: 14,
    color: "#241c6a",
    fontWeight: "500",
    marginBottom: 5,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 20,
    // paddingHorizontal: 28,
    // padding: 8,
  },
  whatsApp: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dcf8c6",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 50,
    elevation: 2,
  },
  call: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4285F41a",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 50,
    // elevation: 6,
  },
});

export default ModelScreen;
