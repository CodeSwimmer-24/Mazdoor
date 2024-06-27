import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import useUserStore from "../../store/store";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native";
import {
  UserIcon,
  PhoneIcon,
  MapPinIcon,
  MapIcon,
} from "react-native-heroicons/outline";
import axios from "axios";
import { BASE_URL } from "../../axios/axios";
import { Dropdown } from "react-native-element-dropdown";
import useUserLocality from "../../store/locationStore";

const RegistrationForm = ({ email }) => {
  const checkNewUser = useUserStore((state) => state.checkNewUser);
  const locality = useUserLocality((state) => state.address);
  const storeName = useUserLocality((state) => state.userName);
  const storeContact = useUserLocality((state) => state.phoneNumber);
  const storeBuildingAddress = useUserLocality(
    (state) => state.buildingAddress
  );
  const exactLine = useUserLocality((state) => state.exactLocationAddress);

  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [bldAddress, setBldAddress] = useState("");
  const [area, setArea] = useState("");
  const [lineNo, setLineNo] = useState("");
  const [exactLocation, setExactLocation] = useState([]);

  const [focusedInput, setFocusedInput] = useState(null);

  const isValidPhoneNumber = (number) => /^\d{10}$/.test(number);

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

  const handleSubmit = (email) => {
    if (isValidPhoneNumber(phoneNo)) {
      axios
        .put(`${BASE_URL}/updateProfile`, {
          emailId: email,
          gender: "M",
          name: name,
          contactNo: phoneNo,
          role: "customer",
          address: {
            area: "Jamia Nager",
            buildingAddress: bldAddress,
            city: "Delhi",
            exactLocation: lineNo,
            locality: area,
            region: "Ookhala",
          },
        })
        .then((resp) => {
          console.log(resp.data, "post Edit");
        })
        .catch((err) => {
          console.log(err.message, "Error");
        });
      checkNewUser(false);
      locality(area);
      storeName(name);
      storeContact(phoneNo);
      storeBuildingAddress(bldAddress);
      exactLine(lineNo);
    } else {
      Alert.alert("Phone Number", "Please enter a valid 10-digit phone number");
    }
  };

  const isFormFilled = () => {
    return name !== "" && phoneNo !== "" && bldAddress !== "" && area !== "";
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View
            style={{
              textAlign: "left",
              marginTop: 50,
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                marginBottom: 0,
                fontWeight: "300",
                color: "#673de6",
              }}
            >
              Welcome to DigiMazdoor 👋
            </Text>
            <Text
              style={{
                fontSize: 34,
                fontWeight: "700",
                color: "#2f1c6a",
                marginBottom: 20,
              }}
            >
              Register Your New Account
            </Text>
          </View>
        </View>

        <View
          style={[
            style.searchSection,
            focusedInput === "input1" && style.inputFocused,
          ]}
          onFocus={() => setFocusedInput("input1")}
        >
          <UserIcon size={20} color="gray" />
          <TextInput
            value={name}
            onChangeText={(newName) => {
              setName(newName);
            }}
            style={[
              style.input,
              focusedInput === "input1" && style.inputFocused,
            ]}
            onFocus={() => setFocusedInput("input1")}
            placeholder="Full Name"
          />
        </View>
        <View
          style={[
            style.searchSection,
            focusedInput === "input2" && style.inputFocused,
          ]}
          onFocus={() => setFocusedInput("input2")}
        >
          <PhoneIcon size={20} color="gray" />
          <TextInput
            keyboardType="number-pad"
            value={phoneNo}
            onChangeText={(phone) => {
              setPhoneNo(phone);
            }}
            style={[
              style.input,
              focusedInput === "input2" && style.inputFocused,
            ]}
            onFocus={() => setFocusedInput("input2")}
            placeholder="Phone Number"
          />
        </View>
        <View
          style={[
            style.searchSection,
            focusedInput === "input3" && style.inputFocused,
          ]}
          onFocus={() => setFocusedInput("input3")}
        >
          <MapIcon size={20} color="gray" />
          <TextInput
            value={bldAddress}
            onChangeText={(add) => {
              setBldAddress(add);
            }}
            style={[
              style.input,
              focusedInput === "input3" && style.inputFocused,
            ]}
            onFocus={() => setFocusedInput("input3")}
            placeholder="Address"
          />
        </View>
        <View
          style={[
            style.searchSection,
            focusedInput === "input4" && style.inputFocused,
          ]}
          onFocus={() => setFocusedInput("input4")}
        >
          <Dropdown
            style={[
              style.input,
              focusedInput === "input4" && style.inputFocused,
            ]}
            onFocus={() => setFocusedInput("input4")}
            placeholderStyle={style.placeholderStyle}
            selectedTextStyle={style.selectedTextStyle}
            iconStyle={style.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select Locality"
            value={area}
            // onChange={(item) => {
            //   setArea(item.value);
            // }}
            onChange={(item) => {
              setArea(item.value);
              setExactLocation(() => {
                return response[item.value].map((item) => {
                  return { label: item, value: item };
                });
              });
              // console.log(response[item.value]);
            }}
            renderLeftIcon={() => (
              <MapPinIcon
                style={style.icon}
                color="gray"
                name="Safety"
                size={20}
              />
            )}
          />
        </View>
        <View
          style={[
            style.searchSection,
            focusedInput === "input4" && style.inputFocused,
          ]}
          onFocus={() => setFocusedInput("input4")}
        >
          <Dropdown
            style={[
              style.input,
              focusedInput === "input4" && style.inputFocused,
            ]}
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
      </ScrollView>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            if (isFormFilled()) {
              handleSubmit(email);
            } else {
              Alert.alert(
                "Fill Details",
                "Please enter all the required information"
              );
            }
          }}
          style={[style.button, !isFormFilled() && style.disabledButton]}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "500",
              fontSize: 15,
              color: "white",
            }}
          >
            Register Now
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  searchSection: {
    marginHorizontal: 20,
    marginVertical: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    paddingLeft: 10,
  },

  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: "#F0F0F0",
    color: "#424242",
    borderRadius: 6,
    underlineColorAndroid: "yourDesiredColor", // Change this to the color you want
    selectionColor: "yourDesiredColor",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#673de6",
    marginTop: 20,
    width: "92%",
    padding: 12,
    borderRadius: 50,
    elevation: 10,
  },
  placeholderStyle: {
    color: "#424242",
    fontSize: 14,
    opacity: 0.5,
  },
  selectedTextStyle: {
    fontSize: 12,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 12,
  },
  icon: {
    marginRight: 5,
    marginLeft: -10,
  },
  disabledButton: {
    backgroundColor: "#673de7",
    color: "#c0c0c0",
  },

  inputFocused: {
    backgroundColor: "#f0ecfc", // Change background color when focused
  },
});

export default RegistrationForm;

// onPress={() => checkNewUser(false)}
