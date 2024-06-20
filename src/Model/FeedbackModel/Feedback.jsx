import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  Modal,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Entypo, FontAwesome } from "@expo/vector-icons";

const Feedback = ({ spEmail, visible, setVisible }) => {
  const [feedbackText, setFeedbackText] = useState("");
  const [rate, setRate] = useState(0);

  const navigation = useNavigation();
  const windowHeight = Dimensions.get("window").height;

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

  return (
    <Modal
      visible={visible}
      onRequestClose={() => setVisible(false)}
      transparent
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        <ScrollView
          style={{
            backgroundColor: "#FFF",
            width: "100%",
            height: windowHeight * 0.55,
            marginTop: windowHeight * 0.45,
            padding: 25,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          <View style={styles.modalHeader}>
            <Text style={styles.headerText}>Fill Feedback</Text>
            <Entypo
              name="cross"
              size={30}
              color="red"
              onPress={() => setVisible(false)}
            />
          </View>

          <View style={styles.emojiContainer}>
            {[1, 2, 3, 4, 5].map((value) => (
              <TouchableOpacity key={value} onPress={() => setRate(value)}>
                <FontAwesome
                  name={rate >= value ? "star" : "star-o"}
                  size={30}
                  color={rate >= value ? "#4caf50" : "#B0B0B0"}
                />
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.feedbackContainer}>
            <Text style={styles.feedbackLabel}>
              Please give us your feedback here!
            </Text>
            <TextInput
              value={feedbackText}
              onChangeText={setFeedbackText}
              style={styles.input}
              multiline
              numberOfLines={4}
              placeholder="Type here..."
            />
          </View>

          <Text style={styles.thankYouText}>
            We thank you for providing us your feedback. It will help us to
            provide the best service to you and to your loved ones.
          </Text>

          <View style={styles.submitButton}>
            <TouchableOpacity
              onPress={handleSubmit}
              style={{
                backgroundColor: "#673de7",
                width: "90%",
                paddingVertical: 10,
                borderRadius: 50,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 16,
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#21005d",
  },
  questionText: {
    marginTop: 40,
    marginLeft: 10,
    fontWeight: "300",
    fontSize: 16,
    marginBottom: 5,
  },
  emojiContainer: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  emoji: {
    fontSize: 30,
  },
  selectedEmoji: {
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  feedbackContainer: {
    padding: 16,
    marginTop: 10,
  },
  feedbackLabel: {
    marginLeft: 0,
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 5,
    color: "#505050",
  },
  input: {
    height: 80,
    borderColor: "lightgray",
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    textAlignVertical: "top",
  },
  thankYouText: {
    fontWeight: "300",
    fontSize: 12,
    paddingLeft: 15,
    marginTop: 10,
  },
  submitButton: {
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Feedback;
