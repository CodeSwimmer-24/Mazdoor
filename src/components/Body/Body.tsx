import { View, Text, ScrollView } from "react-native";
import React from "react";
import Categories from "../categories/Categories";
import Features from "../Features/Features";
import Posters from "../Header/Posters";

const Body = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: "white",
      }}
    >
      <Posters />
      <Categories />
      {/* <Features /> */}
    </ScrollView>
  );
};

export default Body;
