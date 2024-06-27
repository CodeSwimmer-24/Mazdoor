import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StarIcon } from "react-native-heroicons/solid";
import { moderateScale } from "react-native-size-matters";
import { ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const DisplayCardUi = ({ data }) => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={{
        marginBottom: 100,
      }}
    >
      {data.map((item, index) => (
        <TouchableOpacity
          key={item.emailId}
          onPress={() => {
            navigation.navigate("serviceDetail", { id: item.emailId });
          }}
          style={styles.cardContainer}
        >
          <View style={styles.cardContent}>
            <View style={styles.textContainer}>
              <View>
                <Text style={styles.categoryText}>Plumber</Text>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.availabilityText}>🟢 Available</Text>
              </View>
              <View style={styles.ratingRow}>
                <StarIcon size={18} color="#673de7" opacity={0.5} />
                <Text style={styles.ratingText}>{item.rating.toFixed(1)}</Text>
              </View>
            </View>
            <View style={styles.ratingContainer}></View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 10,
    marginBottom: 10,
    width: "90%",
    backgroundColor: "white",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 14,
    overflow: "hidden",
    elevation: 2.7,
    paddingHorizontal: moderateScale(14),
    paddingVertical: moderateScale(15),
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textContainer: {
    // flex: 1,
  },
  categoryText: {
    fontSize: 12,
    color: "gray",
  },
  titleText: {
    fontSize: 18,
    color: "#241c6a",
    fontWeight: "700",
    marginTop: 2,
  },
  availabilityText: {
    fontSize: 12,
    color: "#4caf50",
    fontWeight: "700",
    marginTop: 5,
  },
  ratingContainer: {
    alignItems: "flex-end",
  },
  ratingRow: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  ratingText: {
    fontSize: moderateScale(12),
    color: "#673de6",
    fontWeight: "700",
    marginLeft: 4,
  },
});

export default DisplayCardUi;
