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
  MapPinIcon,
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
import Spinner from "../../components/Spinner/Spinner";
import ServiceList from "./ServiceList";
import Info from "./Info";

const ServiceDetails = () => {
  const [liked, setLiked] = useState(false);
  const [personalDetails, setPersonalDetails] = useState("");
  const [profileDetails, setProfileDetails] = useState("");
  const [rating, setRating] = useState(0);
  const [services, setServices] = useState([]);
  const [feedbackList, setFeedbackList] = useState([]);
  const [loader, setLoader] = useState(true);
  const [route, setRoute] = useState("services");

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
          setLoader(false);
        });
    } catch (err) {
      setLoader(true);
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
          // console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const renderComponentBasedOnRoute = (route) => {
    switch (route) {
      case "services":
        return <ServiceList services={services} />;
      case "rating":
        return <Ratings feedbackList={feedbackList} />;
      case "info":
        return (
          <Info
            profileDetails={profileDetails}
            personalDetails={personalDetails}
          />
        );
      default:
        return null; // Or a default component if needed
    }
  };

  console.log(route);

  return (
    <>
      <ScrollView
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "white",
        }}
      >
        <View style={style.imageContainer}>
          <Image
            style={style.bannerImage}
            source={{
              uri: "https://savvyplumbing.co.za/wp-content/uploads/2021/06/professional-plumber.jpg",
            }}
          />
          <TouchableOpacity onPress={navigation.goBack} style={style.arrowBox}>
            <ArrowLeftIcon size={20} color="#673de6" />
          </TouchableOpacity>
        </View>
        {loader ? (
          <Spinner />
        ) : (
          <View>
            <View style={style.container}>
              <View style={style.descriptionContainer}>
                <TouchableOpacity style={style.like}>
                  <Text style={style.title}>{personalDetails.title}</Text>
                  {liked === true ? (
                    <HeartSolid onPress={likedService} size={28} color="red" />
                  ) : (
                    <HeartIcon onPress={likedService} size={22} color="red" />
                  )}
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 5,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "600",
                      color: "#673de7",
                    }}
                  >
                    {profileDetails.name}
                  </Text>
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 12,
                      fontWeight: "500",
                      color: "#241c6a",
                    }}
                  >
                    ⭐️ {personalDetails.rating} (3,479 Total Rating)
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 15,
                  }}
                >
                  <View
                    style={{
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                      backgroundColor: "#673de71a",
                      borderRadius: 8,
                    }}
                  >
                    <Text
                      style={{
                        color: "#673de7",
                        fontWeight: "500",
                      }}
                    >
                      {personalDetails.serviceType}
                    </Text>
                  </View>
                  <View
                    style={{
                      marginLeft: 15,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <MapPinIcon size={20} color="#673de7" />
                    <Text
                      style={{
                        marginLeft: 5,
                        fontSize: 14,
                        fontWeight: "400",
                      }}
                    >
                      255. G Block Shaeen Bagh
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                marginTop: 20,
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 25,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setRoute("services");
                }}
                style={{}}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: "#673de7",
                    width: 120,
                    paddingBottom: 2,
                    textAlign: "center",
                    borderBottomWidth: route === "services" ? 2 : 1,
                    borderBottomColor:
                      route === "services" ? "#673de7" : "lightgray",
                  }}
                >
                  Services
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setRoute("rating");
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: "#673de7",
                    width: 100,
                    textAlign: "center",
                    paddingBottom: 2,
                    borderBottomWidth: route === "rating" ? 2 : 1,
                    borderBottomColor:
                      route === "rating" ? "#673de7" : "lightgray",
                  }}
                >
                  Rating
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setRoute("info");
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: "#673de7",
                    width: 100,
                    textAlign: "center",
                    paddingBottom: 2,
                    borderBottomWidth: route === "info" ? 2 : 1,
                    borderBottomColor:
                      route === "info" ? "#673de7" : "lightgray",
                  }}
                >
                  Profile
                </Text>
              </TouchableOpacity>
            </View>
            {renderComponentBasedOnRoute(route)}
          </View>
        )}
      </ScrollView>
      {/* <BookingButton
        
      /> */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          alignItems: "center",
          paddingVertical: 12,
          paddingHorizontal: 8,
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity
          style={{
            width: "48%",
            alignSelf: "center",
            justifyContent: "center",
            backgroundColor: "#673de61a",
            paddingVertical: 12,
            borderRadius: 50,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "700",
              fontSize: 15,
              color: "#673de6",
            }}
          >
            Message
          </Text>
        </TouchableOpacity>
        <BookingButton
          name={profileDetails.name}
          title={personalDetails.title}
          addresses={personalDetails.locality}
          email={personalDetails.emailId}
          age={profileDetails.age}
          contactNo={profileDetails.contactNo}
          gender={profileDetails.gender}
        />
      </View>
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
    fontSize: 26,
    fontWeight: "bold",
    color: "#241c6a",
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
