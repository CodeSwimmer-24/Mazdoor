import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { MapPinIcon, StarIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const DisplayCardUi = ({ data }) => {
  const navigation = useNavigation();

  return (
    <>
      {data.map((data) => {
        return (
          <TouchableOpacity
            key={data.emailId}
            style={style.wrapper}
            onPress={() => {
              navigation.navigate("serviceDetail", {
                id: data.emailId,
              });
            }}
          >
            <Image
              style={style.image}
              source={{
                uri: data.imageUrl,
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
    </>
  );
};

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    marginRight: 13,
    marginLeft: 13,
    marginTop: 10,
    borderRadius: 10,
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
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
    color: "#ff1744",
  },
});

export default DisplayCardUi;
