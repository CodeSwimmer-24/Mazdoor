import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const DisplayBooking = ({ data }) => {
  const showModal = () => setVisible(true);
  const navigation = useNavigation();

  return (
    <View>
      {data.map((data, index) => {
        console.log(data.myProfile);
        return (
          <TouchableOpacity
            key={index}
            style={{
              marginTop: 15,
              marginBottom: 15,
              height: 180,
              width: "90%",
              marginLeft: 20,
              backgroundColor: "#fff",
              elevation: 5, // Set the elevation to control the shadow depth
              shadowColor: "rgba(0, 0, 0, 1)", // The shadow color with opacity
              shadowOffset: { width: 0, height: 5 }, // Horizontal and vertical shadow offset
              shadowRadius: 15, // Radius of the shadow
              borderRadius: 5, // Radius of the border
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 20,
                  paddingTop: 10,
                }}
              >
                <Image
                  source={{
                    uri: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698624000&semt=ais",
                  }}
                  style={{ height: 30, width: 30, borderRadius: 50 }}
                />
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 14,
                    fontWeight: "700",
                    color: "#343434",
                  }}
                >
                  {data.myProfile.name}
                </Text>
                <Text
                  style={{ marginLeft: 10, fontSize: 12, fontWeight: "300" }}
                >
                  {data.myProfile.age} - {data.myProfile.gender}
                </Text>
              </View>
              <TouchableOpacity style={{ paddingRight: 10, paddingTop: 10 }}>
                <Image
                  source={{
                    uri: "https://w7.pngwing.com/pngs/915/706/png-transparent-blue-call-icon-dialer-android-google-play-telephone-phone-blue-text-telephone-call.png",
                  }}
                  style={{
                    height: 40,
                    width: 40,
                  }}
                />
              </TouchableOpacity>
            </View>

            <View>
              <Text
                style={{
                  marginLeft: 20,
                  marginTop: 0,
                  fontSize: 18,
                  fontWeight: "800",
                  color: "#343434",
                }}
              >
                {data.serviceProvider.title}
              </Text>
            </View>
            <View
              style={{
                marginTop: 10,
                marginLeft: 20,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "800", color: "rgb(2, 136, 209)" }}>
                <Text style={{ paddingRight: 20 }}>Status: </Text>
                {data.booking.status === "PENDING" ? (
                  <Text
                    style={{
                      fontWeight: "800",
                      color: "rgb(255, 152, 0)",
                    }}
                  >
                    On GOING
                  </Text>
                ) : (
                  <Text
                    style={{
                      fontWeight: "800",
                      color: "#4caf50",
                    }}
                  >
                    {" "}
                    COMPLETED{" "}
                  </Text>
                )}
              </Text>
              <Text style={{ marginLeft: 20, fontWeight: "300", fontSize: 12 }}>
                {data.booking.date} | {data.booking.time}
              </Text>
            </View>
            <View style={{ marginTop: 5, marginLeft: 20 }}>
              <Text style={{ fontWeight: "600", color: "gray", fontSize: 12 }}>
                {data.myProfile.address} Delhi
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                onPress={showModal}
                style={{
                  marginLeft: 20,
                  marginTop: 15,
                }}
              >
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "900",
                    color: "#f44336",
                  }}
                >
                  ╳ Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("feedbackModel", {
                    spEmail: data.serviceProvider.emailId,
                  });
                }}
                style={{
                  backgroundColor: "rgb(229, 246, 253)",
                  marginLeft: 20,
                  marginTop: 15,
                  borderRadius: 3,
                }}
              >
                <Text
                  style={{
                    paddingTop: 3,
                    paddingBottom: 3,
                    marginLeft: 10,
                    marginRight: 10,
                    fontSize: 13,
                    fontWeight: "700",
                    color: "rgb(2, 136, 209)",
                  }}
                >
                  <Text style={{ fontSize: 12 }}>
                    {" "}
                    <StarIcon size={12} color="rgb(2, 136, 209)" />{" "}
                  </Text>{" "}
                  Your Feedback
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default DisplayBooking;
