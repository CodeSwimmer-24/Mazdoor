import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { Modal, PaperProvider, Portal } from "react-native-paper";

const DisplayBooking = ({ data }) => {
  const navigation = useNavigation();

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    width: "80%",
    marginLeft: "10%",
    borderRadius: 8,
    marginTop: 50,
  };

  const handleCancel = (id) => {
    console.log(id);
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
        return (
          <View key={index} style={style.card}>
            <View style={style.textWrapper}>
              <View style={style.callImage}>
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
                    color: "#343434",
                  }}
                >
                  {data.myProfile.name}
                </Text>
                <Text
                  style={{ marginLeft: 10, fontSize: 12, fontWeight: "300" }}
                >
                  {data.myProfile.age} - {data.myProfile.gender}
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
                  color: "#343434",
                }}
              >
                {data.serviceProvider.title}
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
                    {data.myProfile.address.buildingAddress},
                    {data.myProfile.address.area}
                  </>
                )}
                . Delhi
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                onPress={showModal}
                style={{
                  marginLeft: 20,
                  marginTop: 15,
                }}
              >
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "900",
                    color: "#f44336",
                  }}
                >
                  ╳ CANCEL
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("feedbackModel", {
                    spEmail: data.serviceProvider.emailId,
                  });
                }}
                style={{
                  backgroundColor: "rgb(229, 246, 253)",
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
                    color: "rgb(2, 136, 209)",
                  }}
                >
                  <Text style={{ fontSize: 12 }}>
                    {" "}
                    <StarIcon size={12} color="rgb(2, 136, 209)" />{" "}
                  </Text>{" "}
                  Your Feedback
                </Text>
              </TouchableOpacity>
            </View>
            <Portal>
              <Modal
                visible={visible}
                onDismiss={hideModal}
                contentContainerStyle={containerStyle}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={{
                      uri: "https://static.vecteezy.com/system/resources/previews/002/608/282/original/mobile-application-warning-alert-web-button-menu-digital-flat-style-icon-free-vector.jpg",
                    }}
                    style={{
                      height: 100,
                      width: 100,
                    }}
                  />
                  <Text
                    style={{
                      paddingTop: 10,
                      fontSize: 16,
                      fontWeight: "700",
                      color: "#343434",
                    }}
                  >
                    Are you sure you want to Cancel ?
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 20,
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#f443361a",
                        marginRight: 30,
                        paddingLeft: 30,
                        paddingRight: 30,
                        paddingTop: 5,
                        paddingBottom: 5,
                        borderRadius: 5,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: "700",
                          color: "#f44336",
                        }}
                      >
                        NO
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => console.log(index)}
                      style={{
                        backgroundColor: "#4caf501a",
                        paddingLeft: 30,
                        paddingRight: 30,
                        paddingTop: 5,
                        paddingBottom: 5,
                        borderRadius: 5,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: "700",
                          color: "#4caf50",
                        }}
                      >
                        YES
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </Portal>
          </View>
        );
      })}
    </View>
  );
};

const style = StyleSheet.create({
  card: {
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
  },
  textWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default DisplayBooking;
