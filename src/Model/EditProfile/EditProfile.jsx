// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   ScrollView,
//   Keyboard,
// } from "react-native";
// import React, { useEffect, useState } from "react";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import axios from "axios";
// import { BASE_URL } from "../../axios/axios";
// import { Button } from "react-native";
// import { Dropdown } from "react-native-element-dropdown";
// import { MapIcon } from "react-native-heroicons/solid";

const data = [
  { label: "Shaheen Bagh", value: "Shaheen Bagh" },
  { label: "Batla House", value: "Batla House" },
  { label: "Okkhala", value: "Okkhala" },
  { label: "Jamia Nagar", value: "Jamia nagar" },
];

// const EditProfile = () => {
//   const {
//     params: { emailId, callbackFunction, userName, phone, address },
//   } = useRoute();

//   console.log(address, "From Edit");

//   const [name, setName] = useState(userName);
//   const [phoneNo, setPhoneNo] = useState(phone);
//   const [area, setArea] = useState(address?.area);
//   const [isFocus, setIsFocus] = useState(false);

//   const navigation = useNavigation();

//   const handleSubmit = () => {
//     axios
//       .put(`${BASE_URL}/updateProfile`, {
//         emailId: emailId,
//         gender: "M",
//         name: name,
//         contactNo: phoneNo,
//         role: "customer",
//         address: {
//           area: area,
//           buildingAddress: "B15",
//           city: "Delhi",
//           exactLocation: "Near Masjid",
//           locality: "Bag",
//           region: "From Ui",
//         },
//       })
//       .then((resp) => {
//         console.log(resp.data, "post Edit");
//       })
//       .catch((err) => {
//         console.log(err.message, "Error");
//       });
//     callbackFunction({ name, contactNo: phoneNo, address: { area: area } });
//     navigation.navigate("profile");
//   };

//   useEffect(() => {
//     const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
//       navigation.getParent()?.setOptions({
//         tabBarStyle: {
//           display: "none",
//         },
//       });
//     });
//     const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
//       navigation.getParent()?.setOptions({
//         tabBarStyle: {
//           display: "flex",
//         },
//       });
//     });

//     return () => {
//       showSubscription.remove();
//       hideSubscription.remove();
//     };
//   }, []);

//   return (
//     <ScrollView style={style.container}>
//       <Text
//         style={{
//           fontSize: 20,
//           fontWeight: "700",
//           color: "#241c6a",
//           textAlign: "center",
//         }}
//       >
//         ✍🏻 Profile Edit
//       </Text>

//       <View style={{ marginTop: 20 }}>
//         <Text style={style.label}>Full Name</Text>
//         <TextInput
//           value={name}
//           onChangeText={(newName) => {
//             setName(newName);
//           }}
//           placeholder="Please Enter Your Full Name"
//           style={style.inputBox}
//         />
//       </View>
//       <View style={{ marginTop: 10 }}>
//         <Text style={style.label}>Contact Number</Text>
//         <TextInput
//           keyboardType="number-pad"
//           value={phoneNo}
//           onChangeText={(phone) => {
//             setPhoneNo(phone);
//           }}
//           placeholder="Please Enter Your Phone Number"
//           style={style.inputBox}
//         />
//       </View>
//       <View style={{ marginTop: 10 }}>
//         <Text style={style.label}>Your Area</Text>
//         <Dropdown
//           style={style.dropdown}
//           placeholderStyle={style.placeholderStyle}
//           selectedTextStyle={style.selectedTextStyle}
//           iconStyle={style.iconStyle}
//           data={data}
//           maxHeight={300}
//           labelField="label"
//           valueField="value"
//           placeholder="Select Area"
//           value={area}
//           onChange={(item) => {
//             setArea(item.value);
//           }}
//           renderLeftIcon={() => (
//             <MapIcon
//               style={style.icon}
//               color="#673de6"
//               opacity={0.5}
//               name="Safety"
//               size={18}
//             />
//           )}
//         />
//       </View>

//       <View style={{ marginTop: 20, marginBottom: 20 }}>
//         <Button
//           disabled={!phoneNo}
//           onPress={handleSubmit}
//           title="Submit Changes"
//           color="#673de6"
//         />
//       </View>
//     </ScrollView>
//   );
// };

// const style = StyleSheet.create({
//   container: {
//     zIndex: 100,
//     flex: 1,
//     backgroundColor: "#ffff",
//     position: "absolute",
//     bottom: 0,
//     width: "100%",
//     height: "60%",
//     borderTopRightRadius: 10,
//     borderTopLeftRadius: 10,
//     padding: 20,
//   },
//   inputBox: {
//     borderWidth: 1,
//     borderColor: "lightgray",
//     paddingLeft: 12,
//     paddingTop: 4,
//     paddingBottom: 4,
//     borderRadius: 6,
//   },
//   label: {
//     padding: 4,
//     marginLeft: 3,
//     fontSize: 12,
//     fontWeight: "700",
//     color: "#673de6",
//   },
//   dropdown: {
//     height: 40,
//     width: "100%",
//     borderColor: "lightgray",
//     borderWidth: 0.5,
//     padding: 8,
//     borderRadius: 6,
//   },
//   icon: {
//     marginRight: 5,
//   },
//   placeholderStyle: {
//     fontSize: 14,
//     color: "gray",
//   },
//   selectedTextStyle: {
//     fontSize: 14,
//   },
//   iconStyle: {
//     width: 20,
//     height: 20,
//   },
//   inputSearchStyle: {
//     height: 40,
//     fontSize: 14,
//   },
// });

// export default EditProfile;

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Keyboard,
  Modal,
  TouchableOpacityComponent,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import { BASE_URL } from "../../axios/axios";
import { Button } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { MapIcon, XMarkIcon } from "react-native-heroicons/solid";
import { TouchableOpacity } from "react-native";

const EditProfile = ({
  editModal,
  setEditModel,
  emailId,
  userName,
  phone,
  address,
  callbackFunction,
}) => {
  const [name, setName] = useState(userName);
  const [phoneNo, setPhoneNo] = useState(phone);
  const [area, setArea] = useState(address?.area);

  const navigation = useNavigation();

  const handleSubmit = () => {
    axios
      .put(`${BASE_URL}/updateProfile`, {
        emailId: emailId,
        gender: "M",
        name: name,
        contactNo: phoneNo,
        role: "customer",
        address: {
          area: area,
          buildingAddress: "B15",
          city: "Delhi",
          exactLocation: "Near Masjid",
          locality: "Bag",
          region: "From Ui",
        },
      })
      .then((resp) => {
        console.log(resp.data, "post Edit");
      })
      .catch((err) => {
        console.log(err.message, "Error");
      });
    callbackFunction({ name, contactNo: phoneNo, address: { area: area } });
    setEditModel(false);
  };

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
            height: "65%",
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
                value={name}
                onChangeText={(newName) => {
                  setName(newName);
                }}
                placeholder="Please Enter Your Full Name"
                style={style.inputBox}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={style.label}>Contact Number</Text>
              <TextInput
                keyboardType="number-pad"
                value={phoneNo}
                onChangeText={(phone) => {
                  setPhoneNo(phone);
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

            <View style={{ marginTop: 20, marginBottom: 20 }}>
              <Button
                disabled={!phoneNo}
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
