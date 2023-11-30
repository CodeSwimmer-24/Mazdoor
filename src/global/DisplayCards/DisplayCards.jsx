import { ScrollView, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Appbar } from "react-native-paper";
import axios from "axios";

import DisplayCardUi from "./DisplayCardUi";
import Spinner from "../../components/Spinner/Spinner";
import { BASE_URL } from "../../axios/axios";
import { Ionicons } from "@expo/vector-icons";

const DisplayCards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const {
    params: { type },
  } = useRoute();

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "none",
      },
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: "flex",
        },
      });
  }, [navigation]);

  const getData = () => {
    try {
      axios
        // .get(`${BASE_URL}/getAllServiceProviders?serviceType=${type}`)
        .get(`${BASE_URL}/getAllServiceProviders?serviceType=${type}`)
        .then((response) => {
          setData(response.data);
          setLoading(false);
        });
    } catch (err) {
      setLoading(true);
      console.log(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={navigation.goBack} />
        <Appbar.Content title={type} />
      </Appbar.Header>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("filter-location");
        }}
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: 20,
        }}
      >
        <Ionicons name="funnel" size={22} color="#21005d" opacity={0.6} />
        <Text
          style={{
            marginLeft: 10,
            fontSize: 15,
            fontWeight: "500",
            color: "#21005d",
          }}
        >
          Filter By Location
        </Text>
      </TouchableOpacity>
      {loading ? <Spinner /> : <DisplayCardUi data={data} />}
    </ScrollView>
  );
};

export default DisplayCards;
