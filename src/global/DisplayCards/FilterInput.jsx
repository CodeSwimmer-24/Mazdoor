import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { MapIcon } from "react-native-heroicons/solid";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { BASE_URL } from "../../axios/axios";

const FilterInput = () => {
  const [area, setArea] = useState("");
  const [data, setData] = useState([]);

  const getLocation = () => {
    axios.get(`${BASE_URL}/getLocationData`).then((response) => {
      response.data.map((location) => {
        setData((prev) => [
          ...prev,
          { label: location.locality, value: location.locality },
        ]);
      });
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <ScrollView style={style.container}>
      <Ionicons name="funnel" size={22} color="#21005d" opacity={0.6} />
      <View style={{ marginTop: 10 }}>
        <Text style={style.label}>Select Locality...</Text>
        <Dropdown
          style={style.dropdown}
          placeholderStyle={style.placeholderStyle}
          selectedTextStyle={style.selectedTextStyle}
          iconStyle={style.iconStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select Area"
          value={area}
          onChange={(item) => {
            setArea(item.value);
          }}
          renderLeftIcon={() => (
            <MapIcon
              style={style.icon}
              color="#21005d"
              opacity={0.5}
              name="Safety"
              size={18}
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: "#ffff",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "50%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 20,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: "lightgray",
    paddingLeft: 12,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 6,
  },
  label: {
    padding: 4,
    marginLeft: 3,
    fontSize: 12,
    fontWeight: "700",
    color: "#21005d",
  },
  dropdown: {
    height: 40,
    width: "100%",
    borderColor: "lightgray",
    borderWidth: 0.5,
    padding: 8,
    borderRadius: 6,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 14,
    color: "gray",
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
  },
});

export default FilterInput;

// serviceName, serviceDescription, workingHours, price
