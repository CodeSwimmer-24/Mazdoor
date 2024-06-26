import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { WrenchIcon, StarIcon } from "react-native-heroicons/outline";
import { TextInput } from "react-native-paper";

const BookingModel = () => {
  const [rating, setRating] = useState(0);
  const handleStarPress = (newRating) => {
    setRating(newRating);
  };

  return (
    <View style={style.container}>
      <View style={style.wrapper}>
        <View>
          <Text style={style.spStoreName}>Store Name</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>👷</Text>
            <Text style={style.spName}>My Name</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>🛠️</Text>
            <Text style={style.storeDetails}>Service Type</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>📍</Text>
            <Text style={style.storeDetails}>Batla House</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>🚹</Text>
            <Text style={style.storeDetails}>50 - M</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <WrenchIcon color="#673de6" size={16} />
            <Text style={style.storeDetails}>Service Type</Text>
          </View>
        </View>
        <View>
          <Text style={{ padding: 2, fontSize: 18, color: "#4c4c4c" }}>
            📆 Booking Date
          </Text>
          <Text style={{ paddingTop: 5, fontSize: 16, color: "#4c4c4c" }}>
            12/10/2023
          </Text>
        </View>
      </View>
      <View>
        <Text
          style={{
            marginLeft: 20,
            fontSize: 20,
            fontWeight: "700",
            color: "#4c4c4c",
          }}
        >
          Please Rate
        </Text>
        <View style={{ flexDirection: "row", marginTop: 6 }}>
          {[1, 2, 3, 4, 5].map((star) => {
            return (
              <TouchableOpacity
                key={star}
                onPress={() => handleStarPress(star)}
              >
                <Text style={{ marginLeft: 15 }}>
                  <StarIcon color="#673de6" size={25} />
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <KeyboardAvoidingView>
          <View style={{ padding: 10 }}>
            <TextInput
              label="Your Feedback"
              secureTextEntry
              left={<TextInput.Icon icon="star" />}
              style={{ backgroundColor: "white", color: "#673de6" }}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
      <View style={style.button}>
        <Text style={style.buttonText}>Mark Complete</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "60%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  wrapper: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  spStoreName: {
    fontSize: 22,
    padding: 2,
    marginBottom: 12,
    fontWeight: "700",
    color: "#673de6",
  },
  spName: {
    fontSize: 18,
    fontWeight: "500",
    color: "#4c4c4c",
    marginLeft: 10,
  },
  storeDetails: {
    fontSize: 16,
    fontWeight: "300",
    color: "gray",
    marginLeft: 10,
  },
  button: {
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 40,
    marginTop: 30,
    paddingRight: 40,
    paddingTop: 10,
    borderRadius: 4,
    paddingBottom: 10,
    backgroundColor: "#673de6",
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 8,
  },
});

export default BookingModel;
