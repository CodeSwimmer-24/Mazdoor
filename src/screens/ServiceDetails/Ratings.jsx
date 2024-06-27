import { View, Text } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";

const Ratings = ({ feedbackList }) => {
  return (
    <View style={{ marginTop: 10, paddingHorizontal: 5 }}>
      {feedbackList.map((feedback) => {
        console.log(feedback);
        return (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 6,
              paddingHorizontal: 15,
              alignItems: "center",
              borderBottomWidth: 1,
              borderBottomColor: "#f7f7f7",
            }}
          >
            <View
              style={{
                padding: 5,
                width: "80%",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: "#241c6a",
                }}
              >
                {feedback.emailId}
              </Text>
              <Text
                style={{
                  marginTop: 2,
                  fontWeight: "400",
                  fontSize: 12,
                  color: "gray",
                }}
              >
                {feedback.feedback}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                paddingVertical: 1,
                paddingHorizontal: 8,
                marginRight: 10,
                borderRadius: 50,
                borderColor: "#673de7",
              }}
            >
              <StarIcon
                size={13}
                color="#673de7"
                style={{
                  marginRight: 5,
                }}
              />
              <Text
                style={{
                  fontWeight: "700",
                  fontSize: 14,
                  color: "#673de7",
                }}
              >
                {feedback.rating}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Ratings;
