import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
      tabBarStyle: styles.hiddenTabBar,
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: styles.visibleTabBar,
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
    <View style={styles.container}>
      <Appbar.Header style={styles.appBar}>
        <Appbar.BackAction onPress={navigation.goBack} />
        <Appbar.Content title={type} color="#241c6a" />
      </Appbar.Header>
      <FilterInputUpdated />
      {loading ? (
        <Spinner />
      ) : data.length > 0 ? (
        <DisplayCardUi data={data} />
      ) : (
        <View style={styles.noDataContainer}>
          <Image source={nodata} style={styles.noDataImage} />
          <View style={styles.noDataTextContainer}>
            <Text style={styles.noDataTitle}>OppS! 🫤</Text>
            <Text style={styles.noDataMessage}>
              Sorry No Record Found in this Location. Please select some other
              location
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  appBar: {
    backgroundColor: "white",
  },
  hiddenTabBar: {
    display: "none",
  },
  visibleTabBar: {
    display: "flex",
  },
  noDataContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  noDataImage: {
    height: 250,
    width: "80%",
  },
  noDataTextContainer: {
    marginTop: 20,
    flexDirection: "column",
    alignItems: "center",
  },
  noDataTitle: {
    fontSize: 35,
    fontWeight: "700",
    color: "#2f1c6a",
  },
  noDataMessage: {
    fontSize: 16,
    paddingHorizontal: 20,
    fontWeight: "300",
    color: "#2f1c6a",
    marginTop: 10,
    textAlign: "center",
  },
});

export default DisplayCards;
