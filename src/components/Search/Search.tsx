import { View, Text, TextInput } from "react-native";
import React from "react";
import {
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { StyleSheet } from "react-native";

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <MagnifyingGlassIcon size={25} color="#21005d" />
        <TextInput
          placeholder="Electrician, Plumber etc ..."
          keyboardType="default"
          style={styles.searchBar}
        />
      </View>
      <AdjustmentsVerticalIcon size={25} color="#21005d" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
    paddingBottom: 5,
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
    flex: 1,
    marginRight: 10,
    backgroundColor: "#EEEEEE",
    borderRadius: 10,
    alignItems: "center",
    padding: 10,
  },
  searchBar: {
    marginLeft: 12,
  },
});

export default Search;
