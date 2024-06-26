import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ChevronRightIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { client } from "../../client";
import { Appbar } from "react-native-paper";
import { BASE_URL } from "../../axios/axios";
import { Image } from "react-native";

const Services = () => {
  const navigation = useNavigation();
  const [services, setServices] = useState([]);

  const getData = () => {
    try {
      client.get(`${BASE_URL}/getAllServices`).then((response) => {
        setServices(response.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView>
      <Appbar.Header>
        <Appbar.BackAction />
        <Appbar.Content title="Services" />
        <Appbar.Action icon="magnify" />
      </Appbar.Header>
      {services.map((service) => {
        return (
          <TouchableOpacity
            key={service.label}
            onPress={() => {
              navigation.navigate("displayCards", {
                type: categories.title,
              });
            }}
            style={styles.container}
          >
            <Image
              source={{
                uri: "https://st4.depositphotos.com/11953928/26499/v/450/depositphotos_264998100-stock-illustration-pumbling-and-pipeline.jpg",
              }}
              style={styles.containerImages}
            />
            <Text style={styles.title}>{service.label}</Text>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    marginTop: 10,
    marginLeft: 10,
  },
  containerImages: {
    height: 90,
    width: "100%",
    borderRadius: 8,
  },
  title: {
    position: "absolute",
    bottom: -1,
    fontWeight: "bold",
    color: "#241c6a",
    fontSize: 20,
    padding: 2,
  },
});
export default Services;
