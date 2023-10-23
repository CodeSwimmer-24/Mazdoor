import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CheckIcon, CreditCardIcon } from "react-native-heroicons/outline";

const Subscribe = () => {
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
            marginBottom: 10,
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
          to our package of 29(INR) per month.
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 50,
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
              Month
            </Text>
          </View>
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
    bottom: 50,
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