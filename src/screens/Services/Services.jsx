import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ChevronRightIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Appbar } from "react-native-paper";
import { BASE_URL } from "../../axios/axios";

const Services = () => {
  const navigation = useNavigation();
  const [services, setServices] = useState([]);

  const getData = () => {
    try {
      axios.get(`${BASE_URL}/getAllServices`).then((response) => {
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
    <ScrollView>
      <SafeAreaView>
        <Appbar.Header>
          <Appbar.BackAction />
          <Appbar.Content title="Services" />
          <Appbar.Action icon="magnify" />
        </Appbar.Header>
        {services.map((service) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("displayCards", {
                  type: service,
                });
              }}
              key={service}
              style={style.container}
            >
              <Text style={style.serviceName}>{service}</Text>
              <ChevronRightIcon size={18} color="#21005d" />
            </TouchableOpacity>
          );
        })}
      </SafeAreaView>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
    marginTop: 10,
    height: 60,
    width: "90%",
    marginLeft: 15,
    backgroundColor: "rgb(231, 224, 236)",
    borderRadius: 10,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#21005d",
    flex: 1,
    paddingLeft: 20,
  },
});
export default Services;
