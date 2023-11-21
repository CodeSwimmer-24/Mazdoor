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
import {
  Chip,
  Modal,
  PaperProvider,
  Portal,
  Provider,
} from "react-native-paper";
import axios from "axios";
import { BASE_URL } from "../../axios/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import DisplayBooking from "./DisplayBooking";
import NoBooking from "./NoBooking";

import { useIsFocused } from "@react-navigation/native";

const Booking = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [data, setData] = useState([]);

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

  const handleCall = (phoneNumber) => {
    if (phoneNumber) {
      const url = `tel:${phoneNumber}`;
      Linking.openURL(url);
    }
  };

  const getEmailFromLocal = async () => {
    return AsyncStorage.getItem("email");
  };

  const getBookingData = (userEmail) => {
    try {
      axios
        .get(`${BASE_URL}/getActiveUserBookings?emailId=${userEmail}`)
        .then((resp) => {
          console.log(resp.data);
          setData(resp.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (isFocused) {
      getEmailFromLocal().then((email) => {
        getBookingData(email);
      });
    }
  }, [isFocused]);

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "flex",
      },
    });
  }, [navigation]);

  return (
    <PaperProvider>
      <ScrollView style={{ backgroundColor: "white" }}>
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
          {data.length > 0 ? (
            <DisplayBooking data={data} showModal={showModal} />
          ) : (
            <NoBooking />
          )}
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
        </ScrollView>
      </ScrollView>
    </PaperProvider>
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
