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
import { MapIcon } from "react-native-heroicons/solid";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { BASE_URL } from "../../axios/axios";
import { useNavigation, useRoute } from "@react-navigation/native";
import { moderateScale } from "react-native-size-matters";

const FilterInputUpdated = () => {
  const {
    params: { location, type, exact },
  } = useRoute();
  const navigation = useNavigation();

  const [area, setArea] = useState(location);
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
    // location(area);
    // exact(lineNo);
    console.log(area, lineNo, "here");
    navigation.navigate("displayCards", {
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
          width: "90%",
          // flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: 10,
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
              placeholder="Exact Location"
              value={lineNo}
              onChange={(item) => {
                setLineNo(item.value);
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
        </View>

        {/* <Button
            onPress={handleSearch}
            style={{
              borderRadius: 50,
            }}
            color="#673de6"
            title="Search"
          /> */}

        <TouchableOpacity
          onPress={handleSearch}
          style={{
            marginTop: 10,
            width: "100%",
            // height: 50,
            backgroundColor: "#673de6",
            borderRadius: 10,
            // elevation: 25,

            //hover
          }}
        >
          <Text
            style={{
              textAlign: "center",
              padding: 8,
              fontSize: moderateScale(14),
              fontWeight: "600",
              color: "white",
            }}
          >
            SEARCH
          </Text>
        </TouchableOpacity>
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

export default FilterInputUpdated;

// serviceName, serviceDescription, workingHours, price
