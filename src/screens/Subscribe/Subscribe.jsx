import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CheckIcon, CreditCardIcon } from "react-native-heroicons/outline";
import { useRoute } from "@react-navigation/native";

const Subscribe = () => {
  const {
    params: { subsDesc },
  } = useRoute();
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <View>
        <Image
          style={{
            height: "52%",
            width: "100%",
          }}
          source={{
            uri: "https://cdni.iconscout.com/illustration/premium/thumb/the-man-has-repaired-the-old-house-for-rent-7390782-5992776.png",
          }}
        />
        <Text
          style={{
            fontWeight: "700",
            fontSize: 38,
            textAlign: "center",
            color: "#21005d",
            marginBottom: 5,
          }}
        >
          SUBSCRIBE
        </Text>
        <Text
          style={{
            fontWeight: "300",
            fontSize: 14,
            paddingLeft: 20,
            paddingRight: 20,
            textAlign: "center",
            color: "#21005d",
          }}
        >
          You can access all our functionalities and features after subscribing
          to our package of 29(INR) per {subsDesc}.
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "600",
              fontSize: 50,
              paddingLeft: 20,
              paddingRight: 20,
              textAlign: "center",
              color: "#21005d",
            }}
          >
            ₹ 29.00
          </Text>

          <View>
            <Text
              style={{
                fontWeight: "400",
                fontSize: 16,
                color: "#21005d",
              }}
            >
              Per
            </Text>
            <Text
              style={{
                fontWeight: "400",
                fontSize: 16,
                marginTop: -5,
                color: "#21005d",
              }}
            > 
              {subsDesc}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "space-evenly",
          }}
        >
          <Image
            style={{ height: 30, width: 30 }}
            source={{
              uri: "https://logowik.com/content/uploads/images/google-pay-icon-20205841.logowik.com.webp",
            }}
          />
          <Image
            style={{ height: 30, width: 30 }}
            source={{
              uri: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-icon.png",
            }}
          />
          <Image
            style={{ height: 30, width: 60 }}
            source={{
              uri: "https://1000logos.net/wp-content/uploads/2023/03/Paytm-logo.png",
            }}
          />
          <Image
            style={{ height: 30, width: 50 }}
            source={{
              uri: "https://cdn.icon-icons.com/icons2/2699/PNG/512/upi_logo_icon_169316.png",
            }}
          />
        </View>
      </View>
      <TouchableOpacity style={style.containerButton}>
        <CreditCardIcon color="#fff" size={25} />
        <Text style={style.text}>Payment</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  containerButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#21005d",
    position: "absolute",
    bottom: 40,
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

export default Subscribe;
