import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useReducer, useState } from "react";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import axios from "axios";
import { BASE_URL } from "../../axios/axios";
import AsyncStorage from "@react-native-community/async-storage";
import DisplayFav from "./DisplayFav";
import NoFav from "./NoFav";

import { useIsFocused } from "@react-navigation/native";

const Booking = () => {
  const [data, setData] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const isFocused = useIsFocused();

  const getEmailFromLocal = async () => {
    return AsyncStorage.getItem("email");
  };

  const getFavoriteData = (userEmail) => {
    console.log(userEmail);
    setUserEmail(userEmail);
    axios
      .get(`${BASE_URL}/getFavoriteSP?userEmailId=${userEmail}`)
      .then((resp) => {
        console.log(resp.data);
        setData(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (isFocused) {
      getEmailFromLocal().then((email) => {
        getFavoriteData(email);
      });
    }
  }, [isFocused]);

  const deleteFavorite = (favoriteId) => {
    axios
      .delete(`${BASE_URL}/deleteFavoriteSP/${userEmail}/${favoriteId}`)
      .then((res) => {
        setData([...res.data]);
        console.log(res.data);
      });
  };

  return (
    <ScrollView style={{ backgroundColor: "white", marginBottom: 50 }}>
      <View style={style.container1}>
        <View style={style.wrapper1}>
          <Text style={{ color: "white", fontSize: 22, fontWeight: "700" }}>
            Favorate
          </Text>
          <MagnifyingGlassIcon color="white" size={25} />
        </View>
      </View>
      <ScrollView style={{ marginTop: -80 }}>
        {data.length > 0 ? (
          <DisplayFav data={data} deleteFavorite={deleteFavorite} />
        ) : (
          <NoFav />
        )}
      </ScrollView>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container1: {
    height: 220,
    width: "100%",
    backgroundColor: "#673de7",
  },
  wrapper1: {
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
    // backgroundColor: "#fff",
  },
  wrapper: {
    backgroundColor: "white",
    marginRight: 13,
    marginLeft: 13,
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 5, // Set the elevation to control the shadow depth
    shadowColor: "rgba(0, 0, 0, 1)", // The shadow color with opacity
    shadowOffset: { width: 0, height: 5 }, // Horizontal and vertical shadow offset
    shadowRadius: 15, // Radius of the shadow
    borderRadius: 5, // Radius of the border
  },
  headerText: {
    backgroundColor: "gray",
  },
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 14,
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginRight: 20,
  },
  locationContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  image: {
    height: 140,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontWeight: "700",
    color: "#242424",
    fontSize: 16,
    paddingTop: 5,
    paddingBottom: 5,
  },
  ratingText: {
    color: "#242424",
    fontWeight: "bold",
    fontSize: 10,
    paddingRight: 20,
    paddingLeft: 20,
  },
  genre: {
    color: "gray",
    fontSize: 12,
    paddingLeft: 3,
    marginRight: 20,
  },
  location: {
    fontSize: 12,
    color: "gray",
  },
  availability: {
    marginLeft: 20,
    fontSize: 12,
    fontWeight: "700",
    color: "#00e676",
  },
  unAvailability: {
    marginLeft: 20,
    fontSize: 12,
    fontWeight: "700",
    color: "#c5f6fd",
  },
});

export default Booking;

const styles = StyleSheet.create({});
