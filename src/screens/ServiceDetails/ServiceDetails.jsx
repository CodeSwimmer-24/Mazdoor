import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import {
  HeartIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import { HeartIcon as HeartSolid } from "react-native-heroicons/solid";
import ServiceList from "./ServiceList";
import BookingButton from "../../components/BookingButton/BookingButton";

const ServiceDetails = () => {
  const [liked, setLiked] = useState(false);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const {
    params: {
      id,
      title,
      imgUrl,
      address,
      rating,
      genre,
      short_description,
      services,
    },
  } = useRoute();
  return (
    <>
      <ScrollView
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <View style={style.imageContainer}>
          <Image
            style={style.bannerImage}
            source={{
              uri: imgUrl,
            }}
          />
          <TouchableOpacity onPress={navigation.goBack} style={style.arrowBox}>
            <ArrowLeftIcon size={24} color="#21005d" />
          </TouchableOpacity>
        </View>
        <View style={style.container}>
          <View style={style.descriptionContainer}>
            <View style={style.like}>
              <Text style={style.title}>{title}</Text>
              {liked === true ? (
                <HeartSolid
                  onPress={() => setLiked(!liked)}
                  size={28}
                  color="red"
                  opacity={0.6}
                />
              ) : (
                <HeartIcon
                  onPress={() => setLiked(!liked)}
                  size={28}
                  color="red"
                  opacity={0.6}
                />
              )}
            </View>
            <View style={style.locationContainer}>
              <View style={style.rating}>
                <StarIcon color="#21005d" size={18} opacity={0.5} />
                <Text style={style.ratingText}>
                  <Text style={{ color: "#21005d" }}>{rating}</Text> . {genre}
                </Text>
              </View>
              <View style={style.location}>
                <MapIcon color="#21005d" size={18} opacity={0.5} />
                <Text style={style.ratingText}>
                  <Text style={{ color: "#21005d" }}>Near By</Text> . {address}
                </Text>
              </View>
            </View>
            <Text style={style.descriptionText}>{short_description}</Text>
          </View>
          <TouchableOpacity style={style.moreDetails}>
            <QuestionMarkCircleIcon color="#21005d" opacity={0.6} size={22} />
            <Text style={style.moreDetailsText}>
              View More Details/Services
            </Text>
            <ChevronRightIcon color="#21005d" opacity={0.6} size={22} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={style.serviceListText}>Service List</Text>
          {services.map((service) => {
            return (
              <ServiceList
                id={service.id}
                name={service.serviceName}
                serviceDetails={service.serviceDescription}
                servicePrice={service.price}
                availability={service.avalable}
              />
            );
          })}
        </View>
      </ScrollView>
      <BookingButton />
    </>
  );
};

const style = StyleSheet.create({
  bannerImage: {
    width: "full",
    height: 300,
    backgroundColor: "gray",
    padding: 20,
  },
  imageContainer: {
    position: "relative",
  },
  arrowBox: {
    position: "absolute",
    top: 70,
    left: 20,
    padding: 10,
    backgroundColor: "#FAF9F6",
    borderRadius: 50,
  },
  container: {
    backgroundColor: "#fff",
  },
  descriptionContainer: {
    paddingLeft: 15,
    paddingTop: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#28282B",
  },
  like: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 15,
  },
  rating: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 0,
    marginTop: 12,
  },
  ratingText: {
    color: "gray",
    fontSize: 16,
    paddingLeft: 3,
    paddingRight: 13,
  },
  locationContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  location: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 2,
    marginTop: 12,
  },
  descriptionText: {
    color: "gray",
    marginTop: 5,
    paddingBottom: 12,
    marginRight: 8,
  },
  moreDetails: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderTopColor: "lightgray",
    borderTopWidth: 1,
    padding: 18,
    marginTop: 5,
    // marginBottom: 8,
  },
  moreDetailsText: {
    paddingLeft: 5,
    flex: 1,
    fontWeight: "600",
    fontSize: 16,
  },
  serviceListText: {
    paddingLeft: 15,
    paddingTop: 15,
    fontWeight: "bold",
    fontSize: 25,
    paddingBottom: 15,
  },
});

export default ServiceDetails;
