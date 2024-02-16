import { View, Text, TextInput } from "react-native";
import React from "react";
import {
  AdjustmentsHorizontalIcon,
  MapPinIcon,
} from "react-native-heroicons/outline";
import { StyleSheet } from "react-native";
import useUserLocality from "../../store/locationStore";

const Search = () => {
  const { locality } = useUserLocality((state) => ({
    locality: state.locality,
  }));

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <MapPinIcon size={22} color="gray" />
        <TextInput
          editable={false}
          value={locality}
          placeholder="Your locality"
          keyboardType="default"
          style={styles.searchBar}
        />

        <AdjustmentsHorizontalIcon size={22} color="#673de6" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    marginBottom: 4,
    paddingBottom: 5,
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
    flex: 1,
    marginRight: 10,
    backgroundColor: "#f7f7f7",
    borderRadius: 10,
    alignItems: "center",
    padding: 8,
  },
  searchBar: {
    marginLeft: 12,
    flex: 1,
    color: "gray",
  },
});

export default Search;
