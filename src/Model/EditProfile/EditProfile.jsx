import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Keyboard,
  Modal,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import { BASE_URL } from "../../axios/axios";
import { Button } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { MapIcon, XMarkIcon } from "react-native-heroicons/solid";
import { TouchableOpacity } from "react-native";
import useUserLocality from "../../store/locationStore";

const EditProfile = ({
  editModal,
  setEditModel,
  emailId,
  userName,
  phone,
  address,
  callbackFunction,
}) => {
  const { locality } = useUserLocality((state) => ({
    locality: state.locality,
  }));
  const { storeName } = useUserLocality((state) => ({
    storeName: state.storeName,
  }));
  const { storeContact } = useUserLocality((state) => ({
    storeContact: state.storeContact,
  }));
  const { storeBuildingAddress } = useUserLocality((state) => ({
    storeBuildingAddress: state.storeBuildingAddress,
  }));
  const { exactLine } = useUserLocality((state) => ({
    exactLine: state.exactLine,
  }));

  const setLocality = useUserLocality((state) => state.address);
  const setStoreName = useUserLocality((state) => state.userName);
  const setStoreContact = useUserLocality((state) => state.phoneNumber);
  const setBuildingAddress = useUserLocality((state) => state.buildingAddress);
  const setExactLine = useUserLocality((state) => state.exactLocationAddress);

  const navigation = useNavigation();

  const [data, setData] = useState([]);
  const [response, setResponse] = useState([]);
  const [exactLocation, setExactLocation] = useState([]);

  const isValidPhoneNumber = (number) => /^\d{10}$/.test(number);

  const handleSubmit = () => {
    if (isValidPhoneNumber(storeContact)) {
      axios
        .put(`${BASE_URL}/updateProfile`, {
          emailId: emailId,
          gender: "M",
          name: storeName,
          contactNo: storeContact,
          role: "customer",
          address: {
            area: locality,
            buildingAddress: storeBuildingAddress,
            city: "Delhi",
            exactLocation: exactLine,
            locality: locality,
            region: "From Ui",
          },
        })
        .then((resp) => {
          console.log(resp.data, "post Edit");
          navigation.replace("profile");
        })
        .catch((err) => {
          console.log(err.message, "Error");
        });
      // callbackFunction({ name: storeName, contactNo: storeContact, address: { area: area } });
      setEditModel(false);
    } else {
      Alert.alert("Phone Number", "Please enter a valid 10-digit phone number");
    }
  };

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

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: "none",
        },
      });
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: "flex",
        },
      });
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  return (
    <Modal visible={editModal} animationType="slide" transparent={true}>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            width: "100%",
            height: "85%",
            elevation: 15,
          }}
        >
          <ScrollView style={style.container}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                onPress={() => setEditModel(false)}
                style={{
                  backgroundColor: "#FBD9D3",
                  paddingVertical: 7,
                  paddingHorizontal: 8,
                  borderRadius: 50,
                }}
              >
                <XMarkIcon color="red" size={22} />
              </TouchableOpacity>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "700",
                    color: "#241c6a",
                    textAlign: "center",
                  }}
                >
                  Edit Details
                </Text>
              </View>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={style.label}>Full Name</Text>
              <TextInput
                value={storeName}
                onChangeText={(newName) => {
                  setStoreName(newName);
                }}
                placeholder="Please Enter Your Full Name"
                style={style.inputBox}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={style.label}>Contact Number</Text>
              <TextInput
                keyboardType="number-pad"
                value={storeContact}
                onChangeText={(phone) => {
                  setStoreContact(phone);
                }}
                placeholder="Please Enter Your Building Address"
                style={style.inputBox}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={style.label}>Building Address</Text>
              <TextInput
                keyboardType="default"
                value={storeBuildingAddress}
                onChangeText={(addr) => {
                  setBuildingAddress(addr);
                }}
                placeholder="Please Enter Your Phone Number"
                style={style.inputBox}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={style.label}>Your Area</Text>
              <Dropdown
                style={style.dropdown}
                placeholderStyle={style.placeholderStyle}
                selectedTextStyle={style.selectedTextStyle}
                iconStyle={style.iconStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select Locality"
                value={locality}
                // onChange={(item) => {
                //   setLocality(item.value);
                // }}
                onChange={(item) => {
                  setLocality(item.value);
                  setExactLocation(() => {
                    return response[item.value].map((item) => {
                      return { label: item, value: item };
                    });
                  });
                  // console.log(response[item.value]);
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
              <Text style={style.label}>Your Area</Text>
              <Dropdown
                style={style.dropdown}
                placeholderStyle={style.placeholderStyle}
                selectedTextStyle={style.selectedTextStyle}
                iconStyle={style.iconStyle}
                data={exactLocation}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select Exact Location"
                value={exactLine}
                onChange={(item) => {
                  setExactLine(item.value);
                }}
                renderLeftIcon={() => (
                  <MapIconsetShareModel
                    style={style.icon}
                    color="#673de6"
                    opacity={0.5}
                    name="Safety"
                    size={18}
                  />
                )}
              />
            </View>

            <View style={{ marginTop: 60 }}>
              <Button
                disabled={!storeContact}
                onPress={handleSubmit}
                title="Submit Changes"
                color="#673de6"
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginTop: 25,
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
    color: "#673de6",
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

export default EditProfile;
