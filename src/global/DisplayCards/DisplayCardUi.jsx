import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { BellIcon, BookmarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

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
                padding: 10,
                flexDirection: "row",
              }}
            >
              <Image
                source={{
                  uri: "https://img.freepik.com/free-photo/man-electrical-technician-working-switchboard-with-fuses_169016-24062.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702512000&semt=ais",
                }}
                style={{
                  height: 120,
                  width: 120,
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
                  <BookmarkIcon
                    size={22}
                    color="#673de7"
                    style={{
                      marginRight: -25,
                    }}
                  />
                </View>
                <Text
                  style={{
                    marginLeft: 20,
                    fontSize: 20,
                    color: "#241c6a",
                    fontWeight: "700",
                    marginTop: 8,
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
                    marginTop: 2,
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
                    marginTop: 10,
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
