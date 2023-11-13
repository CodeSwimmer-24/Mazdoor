import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { Chip, Modal, Portal } from "react-native-paper";
import axios from "axios";
import { BASE_URL } from "../../axios/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StarIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const Booking = () => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    height: 400,
    borderRadius: 10,
  };

  const getEmailFromLocal = async () => {
    return AsyncStorage.getItem("email");
  };

  const getBookingData = (userEmail) => {
    axios
      .get(`${BASE_URL}/getActiveUserBookings?emailId=${userEmail}`)
      .then((resp) => {
        console.log(resp.data);
        setData(resp.data);
      });
  };

  useEffect(() => {
    getEmailFromLocal().then((email) => {
      getBookingData(email);
    });
    // getBookingData();
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "white", marginBottom: 50 }}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={{ color: "white", fontSize: 22, fontWeight: "700" }}>
            Bookings
          </Text>
          <MagnifyingGlassIcon color="white" size={25} />
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Chip
            mode="outlined"
            icon="wrench"
            onPress={() => console.log("Pressed")}
          >
            Electrician
          </Chip>
          <Chip
            mode="outlined"
            icon="hammer"
            onPress={() => console.log("Pressed")}
          >
            Plumber
          </Chip>
          <Chip
            mode="outlined"
            icon="more"
            onPress={() => console.log("Pressed")}
          >
            More
          </Chip>
        </View>
      </View>

      <ScrollView style={{ marginTop: -60 }}>
        {data.map((data, index) => {
          return (
            <TouchableOpacity key={index} style={styles.card}>
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
                  <Image
                    source={{
                      uri: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698624000&semt=ais",
                    }}
                    style={{ height: 30, width: 30, borderRadius: 50 }}
                  />
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 14,
                      fontWeight: "700",
                      color: "#343434",
                    }}
                  >
                    {data.serviceProvider.name}
                  </Text>
                  <Text
                    style={{ marginLeft: 10, fontSize: 12, fontWeight: "300" }}
                  >
                    {data.serviceProvider.age} - {data.serviceProvider.gender}
                  </Text>
                </View>
                <TouchableOpacity style={{ paddingRight: 10, paddingTop: 10 }}>
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
                  {data.booking.status === "PENDING" ? (
                    <Text
                      style={{
                        fontWeight: "800",
                        color: "rgb(255, 152, 0)",
                      }}
                    >
                      On GOING
                    </Text>
                  ) : (
                    <Text
                      style={{
                        fontWeight: "800",
                        color: "#4caf50",
                      }}
                    >
                      {" "}
                      COMPLETED{" "}
                    </Text>
                  )}
                </Text>
                <Text
                  style={{ marginLeft: 20, fontWeight: "300", fontSize: 12 }}
                >
                  {data.bookingTimestamp} | {data.time}
                </Text>
              </View>
              <View style={{ marginTop: 5, marginLeft: 20 }}>
                <Text
                  style={{ fontWeight: "600", color: "gray", fontSize: 12 }}
                >
                  {data.serviceProvider.address} Delhi
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
                    ╳ Cancel
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
            </TouchableOpacity>
          );
        })}

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
              marginBottom: 100,
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
                paddingTop: 30,
                fontSize: 18,
                fontWeight: "700",
                color: "#343434",
              }}
            >
              Are you sure you want to Cancel ?
            </Text>
            <TouchableOpacity>
              <Text>Yes</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </ScrollView>
    </ScrollView>
  );
};

export default Booking;

const styles = StyleSheet.create({
  container: {
    height: 220,
    width: "100%",
    backgroundColor: "#5000e6",
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 30,
    marginTop: 10,
  },
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
});
