import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Image } from "react-native";
import { HeartIcon, MapPinIcon } from "react-native-heroicons/solid";
import { StarIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const DisplayFav = ({ data, deleteFavorite }) => {
  const navigation = useNavigation();
  return (
    <View>
      {data.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={style.wrapper}
            onPress={() => {
              navigation.navigate("serviceDetail", {
                id: data.serviceProvider.emailId,
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
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginRight: 10,
                }}
              >
                <Text style={style.title}>{data.serviceProvider.title}</Text>
                <HeartIcon
                  onPress={() => deleteFavorite(data.favoriteId)}
                  size={22}
                  color="red"
                  opacity={0.6}
                />
              </View>
              <View style={style.cardContainer}>
                <StarIcon opacity={0.5} size={18} color="#21005d" />
                <Text style={style.genre}>
                  <Text style={style.ratingText}>
                    {data.serviceProvider.rating}
                  </Text>
                  . Average Rating
                </Text>
                <Text style={style.genre}>
                  {data.serviceProvider.serviceType}
                </Text>
              </View>
              <Text
                style={{
                  marginLeft: 4,
                  marginTop: 4,
                  fontSize: 12,
                  fontWeight: "300",
                  color: "gray",
                }}
              >
                {data.serviceProvider.short_description}
              </Text>
              <View style={style.locationContainer}>
                <MapPinIcon color="gray" opacity={0.5} size={18} />
                <Text style={style.location}>
                  {data.serviceProvider.locality}
                </Text>
                {data.serviceProvider.availability ? (
                  <Text style={style.availability}>Available </Text>
                ) : (
                  <Text style={style.unAvailability}>UnAvailable</Text>
                )}
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
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

export default DisplayFav;
