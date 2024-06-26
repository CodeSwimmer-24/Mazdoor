import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { WrenchIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";
const DisplayBooking = ({ data }) => {
  const navigation = useNavigation();

  const [visible, setVisible] = React.useState(false);
  const [modelData, setModelData] = React.useState("");
  const [email, setEmail] = React.useState("");

  const showModal = (index) => {
    setVisible(true);
    setModelData(index);
  };
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    width: "80%",
    marginLeft: "10%",
    borderRadius: 8,
    marginTop: 50,
  };

  const handleCall = (phoneNumber) => {
    if (phoneNumber) {
      const url = `tel:${phoneNumber}`;
      Linking.openURL(url);
    }
  };

  return (
    <View>
      {data.map((data, index) => {
        // console.log(data.booking.bookingId, "-----hhhhllloooo-----");
        return (
          <View
            key={index}
            style={{
              marginTop: 15,
              marginBottom: 15,
              height: 180,
              width: "90%",
              marginLeft: 20,
              backgroundColor: "#fff",
              elevation: 5, // Set the elevation to control the shadow depth
              shadowColor: "rgba(0, 0, 0, 1)", // The shadow color with opacity
              shadowOffset: { width: 0, height: 5 }, // Horizontal and vertical shadow offset
              shadowRadius: 15, // Radius of the shadow
              borderRadius: 5, // Radius of the border
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 20,
                  paddingTop: 10,
                }}
              >
                <TouchableOpacity onPress={handleCall}>
                  <Image
                    source={{
                      uri: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698624000&semt=ais",
                    }}
                    style={{ height: 30, width: 30, borderRadius: 50 }}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 14,
                    fontWeight: "700",
                    color: "#241c6a",
                  }}
                >
                  {data.myProfile.name}
                </Text>
              </View>
              <TouchableOpacity
                style={{ paddingRight: 10, paddingTop: 10 }}
                onPress={() => handleCall(data.myProfile.contactNo)}
              >
                <Image
                  source={{
                    uri: "https://w7.pngwing.com/pngs/915/706/png-transparent-blue-call-icon-dialer-android-google-play-telephone-phone-blue-text-telephone-call.png",
                  }}
                  style={{
                    height: 40,
                    width: 40,
                  }}
                />
              </TouchableOpacity>
            </View>

            <View>
              <Text
                style={{
                  marginLeft: 20,
                  marginTop: 0,
                  fontSize: 18,
                  fontWeight: "800",
                  color: "#241c6a",
                }}
              >
                +91 {data.myProfile.contactNo}
              </Text>
            </View>
            <View
              style={{
                marginTop: 10,
                marginLeft: 20,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "800", color: "rgb(2, 136, 209)" }}>
                <Text style={{ paddingRight: 20 }}>Status: </Text>
                {data.booking.status}
              </Text>
              <Text style={{ marginLeft: 20, fontWeight: "300", fontSize: 12 }}>
                {data.booking.date} | {data.booking.time}
              </Text>
            </View>
            <View style={{ marginTop: 5, marginLeft: 20 }}>
              <Text style={{ fontWeight: "600", color: "gray", fontSize: 12 }}>
                {data.myProfile.address === null ? (
                  "Address"
                ) : (
                  <>
                    {data.myProfile.address.buildingAddress} -
                    {data.myProfile.address.area}
                  </>
                )}
                , Delhi
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("statusModal", {
                    bookingId: data.booking.bookingId,
                  });
                }}
                style={{
                  backgroundColor: "#fff4e5",
                  marginLeft: 20,
                  marginTop: 15,
                  borderRadius: 3,
                }}
              >
                <Text
                  style={{
                    paddingTop: 3,
                    paddingBottom: 3,
                    marginLeft: 10,
                    marginRight: 10,
                    fontSize: 13,
                    fontWeight: "700",
                    color: "#663c00",
                  }}
                >
                  <Text style={{ fontSize: 12 }}>
                    {" "}
                    <WrenchIcon size={12} color="#663c00" />{" "}
                  </Text>{" "}
                  Change Working Status
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
      {/* {visible ? (
        <CancelModal
          modelData={modelData}
          hideModal={hideModal}
          containerStyle={containerStyle}
        />
      ) : null} */}
    </View>
  );
};

export default DisplayBooking;
