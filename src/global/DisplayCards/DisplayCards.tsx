import { ScrollView, Text } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Appbar } from "react-native-paper";
import axios from "axios";

import DisplayCardUi from "./DisplayCardUi";
import Spinner from "../../components/Spinner/Spinner";
import { BASE_URL } from "../../axios/axios";

const DisplayCards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const {
    params: { type },
  }: any = useRoute();

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
        .get(`${BASE_URL}/getAllServiceProviders?serviceType=${type}`)
        .then((response) => {
          setData(response.data);
          setLoading(false);
        });
    } catch (err: any) {
      setLoading(true);
      console.log(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView>
      <Appbar.Header>
        <Appbar.BackAction onPress={navigation.goBack} />
        <Appbar.Content title={type} />
      </Appbar.Header>
      {loading ? <Spinner /> : <DisplayCardUi data={data} />}
    </ScrollView>
  );
};

export default DisplayCards;
