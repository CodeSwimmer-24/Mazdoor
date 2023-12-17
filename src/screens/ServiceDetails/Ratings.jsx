import { View, Text } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { Image } from "react-native";

const Ratings = ({ feedbackList }) => {
  var feedbackArr = [];

  return (
    <View style={{ marginBottom: 60 }}>
      {feedbackList.map((rating) => {
        const renderStars = () => {
          const stars = [];
          const totalStars = rating.rating;

          // Full stars
          for (let i = 1; i <= Math.floor(rating); i++) {
            stars.push(
              <StarIcon key={i} size={18} color="#21005d" opacity={0.5} />
            );
          }

          // Empty stars
          for (let i = stars.length + 1; i <= totalStars; i++) {
            stars.push(
              <StarIcon key={i} size={18} color="#21005d" opacity={0.5} />
            );
          }

          return stars;
        };
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
              {renderStars()}
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
