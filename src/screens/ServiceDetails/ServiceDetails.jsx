import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
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
import BookingButton from "../../components/BookingButton/BookingButton";

import axios from "axios";
import ModelScreen from "../../components/Model/ModelScreen";
import Ratings from "./Ratings";
import { BASE_URL } from "../../axios/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ServiceDetails = () => {
  const [liked, setLiked] = useState(false);
  const [personalDetails, setPersonalDetails] = useState("");
  const [profileDetails, setProfileDetails] = useState("");
  const [rating, setRating] = useState(0);
  const [services, setServices] = useState([]);
  const [feedbackList, setFeedbackList] = useState([]);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const {
    params: { id },
  } = useRoute();

  const getData = () => {
    try {
      axios
        .get(`${BASE_URL}/getServiceProviderDetails?emailId=${id}`)
        .then((response) => {
          setPersonalDetails(response.data.serviceProvider);
          setProfileDetails(response.data.shortProfile);
          setServices(response.data.services);
          setRating(response.data.rating);
          setFeedbackList(response.data.feedbackList);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const likedService = async () => {
    if (liked === false) {
      const userEmail = await AsyncStorage.getItem("email");
      axios
        .post(`${BASE_URL}/addFavoriteSP`, {
          spEmailId: id,
          userEmailId: userEmail,
        })
        .then((response) => {
          setLiked(true);
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
              uri: personalDetails.imageUrl,
            }}
          />
          <TouchableOpacity onPress={navigation.goBack} style={style.arrowBox}>
            <ArrowLeftIcon size={20} color="#21005d" />
          </TouchableOpacity>
        </View>
        <View style={style.container}>
          <View style={style.descriptionContainer}>
            <TouchableOpacity style={style.like}>
              <Text style={style.title}>{personalDetails.title}</Text>
              {liked === true ? (
                <HeartSolid
                  onPress={likedService}
                  size={28}
                  color="red"
                  opacity={0.6}
                />
              ) : (
                <HeartIcon
                  onPress={likedService}
                  size={22}
                  color="red"
                  opacity={0.6}
                />
              )}
            </TouchableOpacity>
            <View style={style.locationContainer}>
              <View style={style.rating}>
                <StarIcon color="#21005d" size={18} opacity={0.5} />
                <Text style={style.ratingText}>
                  <Text style={{ color: "#21005d" }}>{rating}</Text> .{" "}
                  {personalDetails.genre}
                </Text>
              </View>
              <View style={style.location}>
                <MapIcon color="#21005d" size={18} opacity={0.5} />
                <Text style={style.ratingText}>
                  <Text style={{ color: "#21005d" }}>Located at</Text> .
                  {personalDetails.locality}
                </Text>
              </View>
            </View>
            <Text style={style.descriptionText}>
              {personalDetails.serviceType} -{" "}
              {personalDetails.short_description}
            </Text>
            {personalDetails.availability === true ? (
              <View>
                <Text
                  style={{ color: "#4caf50", fontSize: 14, fontWeight: "bold" }}
                >
                  🟢 Available
                </Text>
              </View>
            ) : (
              <View>
                <Text
                  style={{ color: "#ff1744", fontSize: 14, fontWeight: "bold" }}
                >
                  🛑 Un Available
                </Text>
              </View>
            )}
          </View>
          <TouchableOpacity style={style.moreDetails}>
            <Image
              style={style.profileLogo}
              source={{
                uri: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699228800&semt=ais",
              }}
            />
            <View style={style.profile}>
              <Text style={style.name}>{profileDetails.name}</Text>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text style={{ fontSize: 14 }}>Age: {profileDetails.age}</Text>
                <Text style={{ fontSize: 14, paddingLeft: 10 }}>
                  Gender: {profileDetails.gender}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ServiceListModel", {
              service: services,
            });
          }}
          style={style.serviceList}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "700",
              color: "#21005d",
              opacity: 0.8,
            }}
          >
            View All Services
          </Text>
          <ChevronRightIcon color="#21005d" opacity={0.8} />
        </TouchableOpacity>
        <Text
          style={{
            margin: 10,
            fontSize: 16,
            fontWeight: "700",
            color: "#343434",
          }}
        >
          Remarks and Reviews
        </Text>
        <Ratings feedbackList={feedbackList} />
      </ScrollView>
      <BookingButton
        name={profileDetails.name}
        title={personalDetails.title}
        addresses={personalDetails.locality}
        email={personalDetails.emailId}
        age={profileDetails.age}
        contactNo={profileDetails.contactNo}
        gender={profileDetails.gender}
      />
    </>
  );
};

const style = StyleSheet.create({
  bannerImage: {
    width: "full",
    height: 260,
    backgroundColor: "gray",
    padding: 20,
  },
  imageContainer: {
    position: "relative",
  },
  arrowBox: {
    position: "absolute",
    top: 50,
    left: 20,
    padding: 8,
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
    fontSize: 22,
    fontWeight: "bold",
    color: "#28282B",
  },
  profile: {
    flex: 1,
    paddingLeft: 10,
  },
  name: {
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
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
    fontSize: 12,
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
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    // marginBottom: 8,
  },
  moreDetailsText: {
    paddingLeft: 5,
    flex: 1,
    fontWeight: "600",
    fontSize: 12,
  },
  serviceList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "lightgray",
  },
  profileLogo: {
    height: 35,
    width: 35,
    borderRadius: 50,
  },
});

export default ServiceDetails;
