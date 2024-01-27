import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Image } from "react-native";
import { HeartIcon, MapPinIcon } from "react-native-heroicons/solid";
import { StarIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const DisplayFav = ({ data, deleteFavorite }) => {
  const navigation = useNavigation();
  return (
    <View>
      {data.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={{
              marginTop: 10,
              marginBottom: 10,
              // height: 150,
              width: "90%",
              backgroundColor: "white",
              alignSelf: "center",
              justifyContent: "center",
              borderRadius: 22,
              elevation: 5,
            }}
            onPress={() => {
              navigation.navigate("serviceDetail", {
                id: data.serviceProvider.emailId,
              });
            }}
          >
            <View
              style={{
                padding: 10,
                flexDirection: "row",
              }}
            >
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "78%",
                  }}
                >
                  <Text
                    style={{
                      marginLeft: 20,
                      fontSize: 12,
                      color: "gray",
                    }}
                  >
                    {data.serviceProvider.serviceType}
                  </Text>
                  <TouchableOpacity>
                    <HeartIcon
                      onPress={() => deleteFavorite(data.favoriteId)}
                      size={24}
                      color="#673de7"
                    />
                  </TouchableOpacity>
                </View>
                <Text
                  style={{
                    marginLeft: 20,
                    fontSize: 18,
                    color: "#241c6a",
                    fontWeight: "700",
                    marginTop: 2,
                  }}
                >
                  {data.serviceProvider.title}
                </Text>
                <Text
                  style={{
                    marginLeft: 20,
                    fontSize: 16,
                    color: "#673de6",
                    fontWeight: "900",
                    marginTop: 0,
                  }}
                >
                  ⭐️ {data.serviceProvider.rating}.0
                </Text>
                <Text
                  style={{
                    marginLeft: 20,
                    fontSize: 14,
                    color: "#4caf50",
                    fontWeight: "700",
                    marginTop: 5,
                  }}
                >
                  🟢 Avalabal
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const style = StyleSheet.create({});

export default DisplayFav;
