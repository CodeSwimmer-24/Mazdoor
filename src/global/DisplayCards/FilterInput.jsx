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

const FilterInput = () => {
  const {
    params: { location, type, exact },
  } = useRoute();
  const navigation = useNavigation();

  const [area, setArea] = useState(location);
  const [lineNo, setLineNo] = useState(exact);
  const [exactLocation, setExactLocation] = useState([]);
  const [data, setData] = useState([]);

  const getLocation = () => {
    axios.get(`${BASE_URL}/getLocationData`).then((response) => {
      response.data.map((location) => {
        setData((prev) => [
          ...prev,
          { label: location.locality, value: location.locality },
        ]);
        setExactLocation((prev) => [
          ...prev,
          { label: location.exactLocation, value: location.exactLocation },
        ]);
      });
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  const handleSearch = () => {
    location(area);
    exact(lineNo);
    navigation.navigate("displayCards", {
      type: type,
    });
  };

  return (
    <ScrollView style={style.container}>
      <Ionicons
        name="funnel"
        size={22}
        color="#673de6"
        style={{
          marginTop: 10,
        }}
      />
      <View style={{ marginTop: 10 }}>
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
      <View style={{ marginTop: 10 }}>
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
      <View style={{ marginTop: 20 }}>
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
            borderRadius: 50,
            // elevation: 25,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              padding: 8,
              fontSize: 16,
              fontWeight: "600",
              color: "white",
            }}
          >
            SEARCH
          </Text>
        </TouchableOpacity>
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
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    padding: 25,
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

export default FilterInput;

// serviceName, serviceDescription, workingHours, price
