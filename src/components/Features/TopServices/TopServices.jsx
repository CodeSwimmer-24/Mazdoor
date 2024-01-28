import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { StarIcon, MapPinIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { ExclamationCircleIcon } from "react-native-heroicons/outline";

const cards = [
  {
    id: 1,
    imgUrl:
      "https://www.bharattesthouse.com/img/Our-services/Testing/Electrical-Appliances.jpg",
    title: "Electronic Item Repairing",
    rating: 3,
    genre: "100+",
    address: "Batla House",
    short_description: "Hello World",
    services: "",
  },
  {
    id: 2,
    imgUrl:
      "https://i0.wp.com/www.cdccomputers.com/wp-content/uploads/2020/09/cellphonerepair.png?fit=1200%2C486&ssl=1",
    title: "Mobile Device Repairing",
    rating: 3,
    genre: "50",
    address: "Batla House",
    short_description: "Hello World",
    services: "",
  },
  {
    id: 3,
    imgUrl:
      "https://www.ulcdn.net/media/furniture-stores/ncr/mallofindia/mobile/slideshow/Noida.jpeg?1531131943",
    title: "Wood and Craft",
    rating: 3,
    genre: "Top Rating",
    address: "Batla House",
    short_description: "Hello World",
    services: "",
  },
  {
    id: 4,
    imgUrl:
      "https://www.ulcdn.net/media/furniture-stores/ncr/mallofindia/mobile/slideshow/Noida.jpeg?1531131943",
    title: "Wood and Craft",
    rating: 3,
    genre: "Top Rating",
    address: "Batla House",
    short_description: "Hello World",
    services: "",
  },
  {
    id: 5,
    imgUrl:
      "https://www.ulcdn.net/media/furniture-stores/ncr/mallofindia/mobile/slideshow/Noida.jpeg?1531131943",
    title: "Wood and Craft",
    rating: 3,
    genre: "Top Rating",
    address: "Batla House",
    short_description: "Hello World",
    services: "",
  },
  {
    id: 6,
    imgUrl:
      "https://www.ulcdn.net/media/furniture-stores/ncr/mallofindia/mobile/slideshow/Noida.jpeg?1531131943",
    title: "Wood and Craft",
    rating: 3,
    genre: "Top Rating",
    address: "Batla House",
    short_description: "Hello World",
    services: "",
  },
];

const TopServices = () => {
  const navigation = useNavigation();

  return (
    <>
      {cards.map((card) => {
        return (
          <TouchableOpacity
            key={card.id}
            onPress={() => {
              navigation.navigate("displayCards", {
                type: card.title,
              });
            }}
            style={style.wrapper}
          >
            <Image
              style={style.image}
              source={{
                uri: card.imgUrl,
              }}
            />
            <View style={style.container}>
              <Text style={style.title}>{card.title}</Text>
              <View style={style.cardContainer}>
                <ExclamationCircleIcon
                  opacity={0.9}
                  size={22}
                  color="#673de6"
                  style={{ marginRight: 5 }}
                />
                <Text style={style.genre}>
                  More than <Text style={style.ratingText}>{card.genre}</Text>{" "}
                  Service Provider
                </Text>
              </View>
              <View style={style.locationContainer}>
                <MapPinIcon color="gray" opacity={0.5} size={22} />
                <Text style={style.location}>Nearby . {card.address}</Text>
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
    height: 120,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontWeight: "700",
    color: "#242424",
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 5,
  },
  ratingText: {
    color: "#673de6",
    fontWeight: "bold",
    fontSize: 14,
  },
  genre: {
    color: "gray",
  },
  location: {
    fontSize: 10,
    color: "gray",
  },
});

export default TopServices;
