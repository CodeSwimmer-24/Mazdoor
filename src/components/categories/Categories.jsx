import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const categoriesList = [
  {
    img: "https://img.freepik.com/premium-photo/photo-electrical-technician-working_763111-35958.jpg?w=2000",
    title: "Electrician",
  },
  {
    img: "https://img.freepik.com/premium-photo/pump-water-underfloor-heating-system-home_176402-8238.jpg?w=2000",
    title: "Plumber",
  },
  {
    img: "https://img.freepik.com/premium-photo/close-up-shot-handyman-action-focused-task_933496-14384.jpg",
    title: "Carpenter",
  },
  {
    img: "https://www.spatespainting.com/wp-content/uploads/2019/07/house-spates-painting.jpg",
    title: "Painter",
  },
  {
    img: "https://img.freepik.com/free-photo/tiler-working-renovation-apartment_23-2149278631.jpg?w=2000",
    title: "Tiler",
  },
];

const Categories = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 10,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categoriesList.map((categories) => {
        return (
          <TouchableOpacity
            key={categories.title}
            onPress={() => {
              navigation.navigate("displayCards", {
                type: categories.title,
              });
            }}
            style={styles.container}
          >
            <Image
              source={{ uri: categories.img }}
              style={styles.containerImages}
            />
            <Text style={styles.title}>{categories.title}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 4,
  },
  containerImages: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  title: {
    position: "absolute",
    bottom: -1,
    fontWeight: "bold",
    color: "white",
    fontSize: 16,
    padding: 2,
  },
});

export default Categories;
