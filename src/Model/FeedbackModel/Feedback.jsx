import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";

const Feedback = () => {
  const [feedbackText, setFeedbackText] = useState("");
  const [rate, setRate] = useState(0);
  const {
    params: { spEmail },
  } = useRoute();

  const navigation = useNavigation();

  const handleSubmit = () => {
    axios
      .post(`/addSPFeedback`, {
        emailId: spEmail,
        rating: rate,
        feedback: feedbackText,
      })
      .then((response) => {
        console.log(response.status);
      });
    setFeedbackText("");
    setRate(0);
    navigation.navigate("booking");
  };
  console.log(rate);
  return (
    <View style={style.container}>
      <Text
        style={{
          paddingLeft: 20,
          paddingTop: 10,
          paddingBottom: 30,
          fontSize: 20,
          fontWeight: "700",
          color: "#343434",
        }}
      >
        Give Your Feedback
      </Text>
      <Text
        style={{
          marginLeft: 25,
          fontWeight: "300",
          fontSize: 16,
          marginBottom: 5,
        }}
      >
        Are you satisfied ?
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 0,
        }}
      >
        <TouchableOpacity onPress={() => setRate(1)}>
          <Text style={{ fontSize: 30 }}>😡</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setRate(2)}>
          <Text style={{ fontSize: 30 }}>😟</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setRate(3)}>
          <Text style={{ fontSize: 30 }}>😕</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setRate(4)}>
          <Text style={{ fontSize: 30 }}>🙂</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setRate(5)}>
          <Text style={{ fontSize: 30 }}>🥳</Text>
        </TouchableOpacity>
      </View>
      <View style={{ padding: 16, marginTop: 10 }}>
        <Text
          style={{
            marginLeft: 8,
            fontSize: 13,
            fontWeight: "700",
            marginBottom: 5,
          }}
        >
          Please give us your feedback here!
        </Text>
        <TextInput
          value={feedbackText}
          onChangeText={(feedText) => {
            setFeedbackText(feedText);
          }}
          style={style.input}
          multiline
          numberOfLines={4}
          placeholder="Type here..."
        />
      </View>
      <Text style={{ fontWeight: "300", fontSize: 12, paddingLeft: 15 }}>
        We thank you for providing us your feedback it will help us to provide
        the best service to you and to your loved onces.
      </Text>
      <View style={{ marginTop: 25 }}>
        <Button
          onPress={handleSubmit}
          title="Submit 👉"
          color="#21005d"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: "#ffff",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "70%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 20,
  },
  input: {
    height: 80,
    borderColor: "lightgray",
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    textAlignVertical: "top", // Set to 'top' to align text to the top
  },
});

export default Feedback;
