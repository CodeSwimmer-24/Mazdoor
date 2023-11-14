import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { Chip } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { MapPinIcon, StarIcon } from "react-native-heroicons/solid";

const data = [
  {
    title: "Bittu Plumber",
    genre: "Best Plumber shop",
    rating: 4.4,
    locality: "Near Jama Masjid",
    availability: true,
  },
  {
    title: "Bittu Plumber",
    genre: "Best Plumber shop",
    rating: 4.4,
    locality: "Near Jama Masjid",
    availability: true,
  },
  {
    title: "Bittu Plumber",
    genre: "Best Plumber shop",
    rating: 4.4,
    locality: "Near Jama Masjid",
    availability: true,
  },
  {
    title: "Bittu Plumber",
    genre: "Best Plumber shop",
    rating: 4.4,
    locality: "Near Jama Masjid",
    availability: true,
  },
];

const Booking = () => {
  const navigation = useNavigation();

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
      <ScrollView style={{ marginTop: -100 }}>
        {data.map((data) => {
          return (
            <TouchableOpacity
              key="1"
              style={style.wrapper}
              onPress={() => {
                navigation.navigate("serviceDetail", {
                  id: "User10@gmail.com",
                });
              }}
            >
              <Image
                style={style.image}
                source={{
                  uri: "https://img2.ibay.com.mv/is1/full/2023/07/item_4902550_818.jpg",
                }}
              />
              <View style={style.container}>
                <Text style={style.title}>{data.title}</Text>
                <View style={style.cardContainer}>
                  <StarIcon opacity={0.5} size={18} color="#21005d" />
                  <Text style={style.genre}>
                    <Text style={style.ratingText}>{data.rating}</Text>. Average
                    Rating
                  </Text>
                  <Text style={style.genre}>{data.genre}</Text>
                </View>
                <View style={style.locationContainer}>
                  <MapPinIcon color="gray" opacity={0.5} size={18} />
                  <Text style={style.location}>{data.locality}</Text>
                  {data.availability ? (
                    <Text style={style.availability}>Available </Text>
                  ) : (
                    <Text style={style.unAvailability}>UnAvailable</Text>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container1: {
    height: 220,
    width: "100%",
    backgroundColor: "#5000e6",
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
