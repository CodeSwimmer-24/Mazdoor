import { ScrollView, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Appbar } from "react-native-paper";
import { client } from "../../client";

import DisplayCardUi from "./DisplayCardUi";
import Spinner from "../../components/Spinner/Spinner";
import { BASE_URL } from "../../axios/axios";
import { Ionicons } from "@expo/vector-icons";

import { useIsFocused } from "@react-navigation/native";
import FilterInputUpdated from "./FilterInputUpdated";

const DisplayCards = () => {
  const {
    params: { type },
  } = useRoute();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [locality, setLocality] = useState("");
  const [exactLocation, setExactLocation] = useState("");

  const navigation = useNavigation();
  const isFocused = useIsFocused();

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
      client
        .get(
          `${BASE_URL}/getAllServiceProviders?exactLocation=&locality=${locality}&serviceType=${type}`
        )
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
    if (isFocused) {
      getData();
    }
  }, [isFocused]);

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Appbar.Header
        style={{
          backgroundColor: "white",
        }}
      >
        <Appbar.BackAction onPress={navigation.goBack} />
        <Appbar.Content title={type} color="#241c6a" />
        {/* <Appbar.Action
          icon="filter-outline"
          color="#673de6"
          onPress={() => {
            navigation.navigate("filter-location", {
              exact: setExactLocation,
              location: setLocality,
              type: type,
            });
          }}
        /> */}
      </Appbar.Header>
      <FilterInputUpdated></FilterInputUpdated>

      {loading ? <Spinner /> : <DisplayCardUi data={data} />}
    </ScrollView>
  );
};

export default DisplayCards;
