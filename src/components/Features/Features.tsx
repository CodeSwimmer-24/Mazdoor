import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Chip } from "react-native-paper";

const Features = () => {
  const details = [
    {
      image: "",
      title: "",
      type: "",
      rating: "",
      avalabel: "",
    },
    {
      image: "",
      title: "",
      type: "",
      rating: "",
      avalabel: "",
    },
    {
      image: "",
      title: "",
      type: "",
      rating: "",
      avalabel: "",
    },
    {
      image: "",
      title: "",
      type: "",
      rating: "",
      avalabel: "",
    },
  ];
  return (
    <View>
      <View style={styles.container}>
        <Text
          style={{
            padding: 5,
            fontSize: 18,
            fontWeight: "600",
            color: "#241c6a",
          }}
        >
          Top Most Services
        </Text>
        <Text
          style={{
            fontWeight: "600",
            color: "#673de6",
          }}
        >
          See All
        </Text>
      </View>
      {details.map((info) => {
        return (
          <TouchableOpacity style={styles.wrapper}>
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
                  borderRadius: 20,
                }}
              />
              <View>
                <Text
                  style={{
                    marginLeft: 20,
                    fontSize: 12,
                    color: "gray",
                  }}
                >
                  Plumber
                </Text>
                <Text
                  style={{
                    marginLeft: 20,
                    fontSize: 20,
                    color: "#241c6a",
                    fontWeight: "700",
                    marginTop: 8,
                  }}
                >
                  Arman Plumber
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
                  ⭐️ 5.0
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 5,
    alignItems: "center",
    marginTop: 10,
  },
  wrapper: {
    marginTop: 10,
    marginBottom: 10,
    // height: 150,
    width: "90%",
    backgroundColor: "white",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 20,
    elevation: 15,
  },
});

export default Features;
