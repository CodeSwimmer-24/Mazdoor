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
import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";
import DisplayBooking from "./DisplayBooking";
import NoBooking from "./NoBooking";

import { useIsFocused } from "@react-navigation/native";
import Spinner from "../../components/Spinner/Spinner";

const Booking = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [data, setData] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  const getEmailFromLocal = async () => {
    return AsyncStorage.getItem("email");
  };

  const getBookingData = (userEmail) => {
    setIsLoader(true);
    try {
      axios
        .get(`${BASE_URL}/getActiveUserBookings?emailId=${userEmail}`)
        .then((resp) => {
          // console.log(resp.data);
          setData(resp.data);
          setIsLoader(false);
        });
    } catch (err) {
      setIsLoader(false);
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

  const renderBooking = (stage) => {
    if (route.length >= 1) {
      return <DisplayBooking data={data} />;
    } else if (route.length) {
    }
  };

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
        </View>
        {isLoader ? (
          <Spinner />
        ) : data.length > 0 ? (
          <ScrollView
            style={{
              marginTop: -80,
            }}
          >
            <DisplayBooking data={data} />
          </ScrollView>
        ) : (
          <NoBooking />
        )}
      </ScrollView>
    </PaperProvider>
  );
};

export default Booking;

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: "100%",
    backgroundColor: "#673de7",
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
