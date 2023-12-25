import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { BellIcon, BookmarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import ServiceImage from "../../assets/service.jpg";

const DisplayCardUi = ({ data }) => {
  const navigation = useNavigation();
  return (
    <>
      {data.map((data, index) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("serviceDetail", {
                id: data.emailId,
              });
            }}
            key={data.emailId}
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
          >
            <View
              style={{
                padding: 5,
                flexDirection: "row",
              }}
            >
              <Image
                source={ServiceImage}
                style={{
                  height: 90,
                  width: 90,
                  borderRadius: 22,
                }}
              />
              <View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      marginLeft: 20,
                      fontSize: 12,
                      color: "gray",
                    }}
                  >
                    Plumber
                  </Text>
                  {/* <BookmarkIcon
                    size={22}
                    color="#673de7"
                    style={{
                      marginRight: -25,
                    }}
                  /> */}
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
                  {data.title}
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
                  ⭐️ {data.rating}.0
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
    </>
  );
};

const style = StyleSheet.create({
  container: {
    width: "45%",
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowRadius: 15,
    // Adjust the shadowOffset based on your design
    shadowOffset: {
      width: 0,
      height: 5,
    },
    // Add other styles as needed
    backgroundColor: "white", // Set the background color if needed
    marginBottom: 10,
  },
});

export default DisplayCardUi;
