import { View, Text } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { Image } from "react-native";

const ratings = [
  {
    name: "Fahad Mahmmd",
    description: "Bahut aacha kaam kiya bhai, time per kaam khatm",
    ratings: 3.5,
  },
  {
    name: "Fahad Mahmmd",
    description: "Bahut aacha kaam kiya bhai, time per kaam khatm",
    ratings: 3.5,
  },
  {
    name: "Fahad Mahmmd",
    description: "Bahut aacha kaam kiya bhai, time per kaam khatm",
    ratings: 3.5,
  },
  {
    name: "Fahad Mahmmd",
    description: "Bahut aacha kaam kiya bhai, time per kaam khatm",
    ratings: 3.5,
  },
  {
    name: "Fahad Mahmmd",
    description: "Bahut aacha kaam kiya bhai, time per kaam khatm",
    ratings: 3.5,
  },
];

const Ratings = ({ feedbackList }) => {
  return (
    <View style={{ marginBottom: 60 }}>
      {feedbackList.map((rating) => {
        return (
          <View
            key={rating.id}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "white",
              padding: 8,
              borderTopWidth: 1,
              borderTopColor: "lightgray",
            }}
          >
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/9187/9187604.png",
              }}
              style={{ height: 25, width: 25 }}
            />
            <View style={{ width: "70%" }}>
              <Text
                style={{ fontSize: 12, fontWeight: "bold", color: "#343434" }}
              >
                {rating.emailId}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "400",
                  paddingTop: 2,
                  color: "#343434",
                }}
              >
                {rating.feedback}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontWeight: "700",
                  marginRight: 6,
                  opacity: 0.7,
                  fontSize: 14,
                  color: "#21005d",
                }}
              >
                {rating.rating}.0
              </Text>
              <StarIcon size={18} color="#21005d" opacity={0.7} />
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Ratings;
