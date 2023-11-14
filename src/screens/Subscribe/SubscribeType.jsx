import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../axios/axios";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const SubscribeType = () => {
  const [subscribe, setSubscribe] = useState([]);

  const navigation = useNavigation();
  const getDetails = () => {
    axios.get(`${BASE_URL}/getAllSubscription`).then((resp) => {
      setSubscribe(resp.data);
      console.log(resp.data);
    });
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <ScrollView style={{ height: "100%", marginBottom: -160 }}>
      <Appbar.Header>
        <Appbar.BackAction />
        <Appbar.Content title="₹ Subscriptions Plans" />
      </Appbar.Header>
      {subscribe.map((subs) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("subscribeTo", {
                image: subs.subscriptionImage,
                price: subs.price,
                subsDesc: subs.subscriptionDuration,
              });
            }}
            key={subs.subscriptionId}
            style={style.container}
          >
            <Image
              source={{
                uri: subs.subscriptionImageUrl,
              }}
              style={{
                height: 150,
                width: "100%",
                padding: 50,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            />
            <View style={style.card}>
              <View style={{ width: "60%" }}>
                <Text style={{ fontSize: 12, color: "gray" }}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#21005d",
                      fontWeight: "bold",
                    }}
                  >
                    Subscribe
                  </Text>{" "}
                  to our{" "}
                  <Text style={{ color: "#21005d", fontWeight: "500" }}>
                    {subs.subscriptionDuration} package
                  </Text>
                  and enjoy the features.
                </Text>
              </View>
              <Text
                style={{
                  color: "#21005d",
                  fontSize: 30,
                  fontWeight: "bold",
                }}
              >
                ₹ {subs.price}/
                <Text style={{ fontSize: 15 }}>
                  {subs.subscriptionDuration}
                </Text>
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  title: {
    textAlign: "center",
    paddingTop: 20,
    fontSize: 25,
    fontWeight: "800",
    color: "#21005d",
  },
  container: {
    width: "fit",
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 0,
    backgroundColor: "white",
    borderRadius: 10,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    alignItems: "center",
  },
});

export default SubscribeType;
