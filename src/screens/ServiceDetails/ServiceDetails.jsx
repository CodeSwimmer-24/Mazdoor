import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
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
import ServiceList from "./ServiceList";
import BookingButton from "../../components/BookingButton/BookingButton";

import axios from "axios";

const ServiceDetails = () => {
  const [liked, setLiked] = useState(false);
  const [personalDetails, setPersonalDetails] = useState("");
  const [profileDetails, setProfileDetails] = useState("");
  const [services, setServices] = useState([]);

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
      axios.get(`getServiceProviderDetails?emailId=${id}`).then((response) => {
        setPersonalDetails(response.data.serviceProvider);
        setProfileDetails(response.data.shortProfile);
        setServices(response.data.services);
      });
    } catch (err) {
      console.log(err);
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
            <ArrowLeftIcon size={24} color="#21005d" />
          </TouchableOpacity>
        </View>
        <View style={style.container}>
          <View style={style.descriptionContainer}>
            <View style={style.like}>
              <Text style={style.title}>{personalDetails.title}</Text>
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
                  <Text style={{ color: "#21005d" }}>
                    {personalDetails.rating}
                  </Text>{" "}
                  . {personalDetails.genre}
                </Text>
              </View>
              <View style={style.location}>
                <MapIcon color="#21005d" size={18} opacity={0.5} />
                <Text style={style.ratingText}>
                  <Text style={{ color: "#21005d" }}>Near By</Text> .{" "}
                  {personalDetails.locality}
                </Text>
              </View>
            </View>
            <Text style={style.descriptionText}>
              {personalDetails.short_description}
            </Text>
            {personalDetails.availability === true ? (
              <View>
                <Text
                  style={{ color: "#00e676", fontSize: 16, fontWeight: "bold" }}
                >
                  Available
                </Text>
              </View>
            ) : (
              <View>
                <Text
                  style={{ color: "#ff1744", fontSize: 16, fontWeight: "bold" }}
                >
                  Un Available
                </Text>
              </View>
            )}
          </View>
          <TouchableOpacity style={style.moreDetails}>
            {/* <QuestionMarkCircleIcon color="#21005d" opacity={0.6} size={22} /> */}
            <Image
              style={style.profileLogo}
              source={{
                uri: "https://cdn3d.iconscout.com/3d/premium/thumb/profile-5590850-4652486.png",
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
            {/* <ChevronRightIcon color="#21005d" opacity={0.6} size={22} /> */}
          </TouchableOpacity>
        </View>
        <View>
          <Text style={style.serviceListText}>Service List</Text>
          {services.map((service) => {
            return (
              <ServiceList
                serviceName={service.serviceName}
                serviceDescription={service.serviceDescription}
                workingHours={service.workingHours}
                price={service.price}
                id={service.id}
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
  profile: {
    flex: 1,
    paddingLeft: 12,
  },
  name: {
    paddingBottom: 5,
    fontSize: 16,
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
    paddingLeft: 10,
    paddingTop: 18,
    paddingBottom: 18,
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
  profileLogo: {
    height: 40,
    width: 40,
  },
});

export default ServiceDetails;
