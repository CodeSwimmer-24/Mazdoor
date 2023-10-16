import { View, Text, ScrollView } from "react-native";
import React from "react";
import Categories from "../categories/Categories";
import Features from "../Features/Features";

const Body = () => {
  return (
    <ScrollView>
      <Categories />
      <Features />
    </ScrollView>
  );
};

export default Body;
