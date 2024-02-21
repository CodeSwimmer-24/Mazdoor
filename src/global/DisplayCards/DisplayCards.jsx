import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Appbar } from "react-native-paper";
import axios from "axios";

import DisplayCardUi from "./DisplayCardUi";
import Spinner from "../../components/Spinner/Spinner";
import { BASE_URL } from "../../axios/axios";
import { Ionicons } from "@expo/vector-icons";

import { useIsFocused } from "@react-navigation/native";
import FilterInputUpdated from "./FilterInputUpdated";
import useUserLocality from "../../store/locationStore";
import nodata from "../../assets/noData.jpg";

const DisplayCards = () => {
  const {
    params: { type },
  } = useRoute();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { locality } = useUserLocality((state) => ({
    locality: state.locality,
  }));
  const { exactLine: exact } = useUserLocality((state) => ({
    exactLine: state.exactLine,
  }));

  const setExact = useUserLocality((state) => state.exactLocationAddress);

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
      axios
        .get(
          `${BASE_URL}/getAllServiceProviders?exactLocation=&locality=${locality}&serviceType=${type}`
        )
        .then((response) => {
          setData(response.data);
          setLoading(false);
          setExact(null);
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

  console.log(locality, exact);

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Appbar.Header
        style={{
          backgroundColor: "white",
        }}
      >
        <Appbar.BackAction onPress={navigation.goBack} />
        <Appbar.Content title={type} color="#241c6a" />
      </Appbar.Header>
      <FilterInputUpdated />

      {loading ? (
        <Spinner />
      ) : data.length > 0 ? (
        <DisplayCardUi data={data} />
      ) : (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Image
            source={nodata}
            style={{
              height: 250,
              width: "80%",
            }}
          />
          <View
            style={{
              marginTop: 20,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 35,
                fontWeight: "700",
                color: "#2f1c6a",
              }}
            >
              OppS! 🫤
            </Text>
            <Text
              style={{
                fontSize: 16,
                paddingHorizontal: 20,
                fontWeight: "300",
                color: "#2f1c6a",
                marginTop: 5,
                textAlign: "center",
                marginTop: 10,
              }}
            >
              Sorry No Record Found in this Location. Please select some other
              location
            </Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default DisplayCards;
