import { View, Text } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { Image } from "react-native";

// const feedbackList = [
//   {
//     emailId: "Fahad Mahmmd",
//     feedback: "Bahut aacha kaam kiya bhai, time per kaam khatm",
//     rating: 3,
//   },
//   {
//     emailId: "Fahad Mahmmd",
//     feedback: "Bahut aacha kaam kiya bhai, time per kaam khatm",
//     rating: 3,
//   },
//   {
//     emailId: "Fahad Mahmmd",
//     feedback: "Bahut aacha kaam kiya bhai, time per kaam khatm",
//     rating: 3,
//   },
//   {
//     emailId: "Fahad Mahmmd",
//     feedback: "Bahut aacha kaam kiya bhai, time per kaam khatm",
//     rating: 3,
//   },
//   {
//     emailId: "Fahad Mahmmd",
//     feedback: "Bahut aacha kaam kiya bhai, time per kaam khatm",
//     rating: 3,
//   },
// ];

const Ratings = ({ feedbackList }) => {
  return (
    <View style={{ marginBottom: 60 }}>
      {feedbackList.map((rating) => {
        return (
          <View
            style={{
              backgroundColor: "white",
              borderBottomWidth: 1,
              borderBottomColor: "lightgray",
            }}
          >
            <View
              style={{
                paddingLeft: 10,
                paddingTop: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <StarIcon color="#21005d" opacity={0.5} size={18} />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  paddingLeft: 10,
                  color: "#21005d",
                  fontWeight: "700",
                }}
              >
                {rating.rating}
              </Text>
            </View>
            <Text
              style={{
                color: "black",
                fontSize: 16,
                fontWeight: "400",
                padding: 10,
                color: "#343434",
              }}
            >
              {rating.feedback}
            </Text>
            <Text
              style={{
                paddingLeft: 10,
                paddingBottom: 10,
                fontSize: 16,
                fontWeight: 700,
                color: "#343434",
              }}
            >
              {rating.emailId}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default Ratings;

// emailId .rating. feedback
//
