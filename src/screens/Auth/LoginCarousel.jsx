import { View, Text, Dimensions, StyleSheet } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import car1 from "../../assets/Car1.png";
import carPlumber from "../../assets/CarPlumber.png";
import woodWork from "../../assets/Woodwork.png";
import Maintenance from "../../assets/Maintenance.png";

const images = [car1, carPlumber, woodWork, Maintenance];

const LoginCarousel = () => {
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SliderBox
        images={images}
        dotColor="transparent"
        inactiveDotColor="transparent"
        imageLoadingColor="#2f1c6a"
        autoplay={true}
        autoplayInterval={5000}
        circleLoop={true}
        sliderBoxHeight={500} // Adjust the height of the SliderBox
        parentWidth={Dimensions.get("window").width} // Adjust the width of the SliderBox
        resizeMode="contain" // Ensure images fit within the SliderBox
        imageStyle={styles.image} // Apply styles to the images
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%", // Adjust the width of the images
    height: "100%", // Adjust the height of the images
  },
});

export default LoginCarousel;
