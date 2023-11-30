import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { MapPinIcon, StarIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const DisplayCardUi = ({ data }) => {
  const navigation = useNavigation();
  return (
    <>
      {data.map((data, index) => {
        console.log(data);
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("serviceDetail", {
                id: data.emailId,
              });
            }}
            key={data.emailId}
            style={{
              height: 120,
              margin: 12,
              borderRadius: 5,
              flexDirection: "row",
              elevation: 5,
              shadowColor: "#000",
              shadowOpacity: 0.35,
              shadowRadius: 15,
              shadowOffset: {
                width: 0,
                height: 5,
              },
              // Additional styles for the container if needed
              backgroundColor: "#fff",
            }}
          >
            <View>
              <Image
                source={{
                  uri: "https://img.freepik.com/free-photo/worker-repairing-water-heater_23-2149334230.jpg",
                }}
                style={{
                  height: 120,
                  width: 140,
                  borderRadius: 5,
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 5,
                  fontSize: 12,
                  fontWeight: "300",
                }}
              >
                Service Type - {data.serviceType}
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 5,
                  fontSize: 20,
                  fontWeight: "700",
                  color: "#343434",
                }}
              >
                {data.title}
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 10,
                  fontWeight: "700",
                  color: "#21005d",
                  opacity: 0.6,
                }}
              >
                🌟 {data.rating}.0
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 5,
                  fontWeight: "700",
                  color: "#4caf50",
                  fontSize: 12,
                }}
              >
                {data.availability ? (
                  <Text> 🟢 AVAILABEL</Text>
                ) : (
                  <Text>🛑 UN-AVAILABEL</Text>
                )}
              </Text>
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
