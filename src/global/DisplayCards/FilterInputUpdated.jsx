import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { MapIcon, MapPinIcon } from "react-native-heroicons/solid";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { BASE_URL } from "../../axios/axios";
import { useNavigation, useRoute } from "@react-navigation/native";
import { moderateScale } from "react-native-size-matters";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import useUserLocality from "../../store/locationStore";

const FilterInputUpdated = () => {
  const {
    params: { location, type, exact },
  } = useRoute();
  const navigation = useNavigation();
  const { locality } = useUserLocality((state) => ({
    locality: state.locality,
  }));
  const setLocality = useUserLocality((state) => state.address);

  const [area, setArea] = useState(locality);
  const [lineNo, setLineNo] = useState(exact);
  const [exactLocation, setExactLocation] = useState([]);
  const [data, setData] = useState([]);
  const [response, setResponse] = useState([]);

  const getLocation = () => {
    axios.get(`${BASE_URL}/getLocationData`).then((response) => {
      const tempKeys = Object.keys(response.data);
      setResponse(response.data);

      tempKeys.map((item) => {
        setData((prev) => {
          return [...prev, { label: item, value: item }];
        });
      });
    });
  };

  useEffect(() => {
    if (data.length === 0) getLocation();
  }, []);

  const handleSearch = () => {
    setLocality(area);
    // exact(lineNo);
    navigation.replace("displayCards", {
      type: type,
    });
  };

  return (
    <View
      style={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 8,
      }}
    >
      <View
        style={{
          width: "96%",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 10,
          gap: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            gap: 0,
            alignItems: "center",
          }}
        >
          <View style={{ marginTop: 10, flex: 0.5 }}>
            <Text style={style.label}>Select Locality</Text>
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
                setExactLocation(() => {
                  return response[item.value].map((item) => {
                    return { label: item, value: item };
                  });
                });
                console.log(response[item.value]);
              }}
              renderLeftIcon={() => (
                <MapIcon
                  style={style.icon}
                  color="#673de6"
                  opacity={0.5}
                  name="Safety"
                  size={18}
                />
              )}
            />
          </View>
          <View style={{ marginTop: 10, flex: 0.5 }}>
            <Text style={style.label}>Exact Location</Text>
            <Dropdown
              style={style.dropdown}
              placeholderStyle={style.placeholderStyle}
              selectedTextStyle={style.selectedTextStyle}
              iconStyle={style.iconStyle}
              data={exactLocation}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Location"
              value={lineNo}
              onChange={(item) => {
                setLineNo(item.value);
              }}
              renderLeftIcon={() => (
                <MapPinIcon
                  style={style.icon}
                  color="#673de6"
                  opacity={0.5}
                  name="Safety"
                  size={18}
                />
              )}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#673de6",
              paddingVertical: 10,
              paddingHorizontal: 10,
              marginLeft: 3,
              borderRadius: 50,
              marginTop: 25,
              marginRight: 5,
            }}
            onPress={handleSearch}
          >
            <MagnifyingGlassIcon size={16} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
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
    color: "#241c6a",
  },
  dropdown: {
    height: 40,
    width: "90%",
    borderColor: "lightgray",
    borderWidth: 0.5,
    padding: 8,
    borderRadius: 10,
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

export default FilterInputUpdated;

// serviceName, serviceDescription, workingHours, price
