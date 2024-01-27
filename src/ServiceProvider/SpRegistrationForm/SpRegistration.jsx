import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import SpStoreRegister from "./SpStoreRegister";

const SpRegistration = ({ email }) => {
  const [currentPage, setCurrentPage] = useState("Page1");

  const changePage = () => {
    setCurrentPage(currentPage === "Page1" ? "Page2" : "Page1");
  };
  return (
    <SafeAreaView>
      {currentPage === "Page1" && (
        <ScrollView>
          <View
            style={{
              textAlign: "left",
              marginTop: 20,
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
                fontSize: 32,
                fontWeight: "700",
                color: "#2f1c6a",
                marginBottom: 20,
              }}
            >
              Register Your New User Account
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 20,
            }}
          >
            <TextInput
              keyboardType="number-pad"
              style={style.input}
              placeholder="Enter your Name"
            />
            <TextInput
              keyboardType="number-pad"
              style={style.input}
              placeholder="Enter your Phone Number"
            />
            <TextInput
              keyboardType="number-pad"
              style={style.input}
              placeholder="Enter your Gender"
            />
            <TextInput
              keyboardType="number-pad"
              style={style.input}
              placeholder="Enter your Age"
            />
            <TextInput
              keyboardType="number-pad"
              style={style.input}
              placeholder="Enter your Aadhar Number"
            />
            <TextInput
              keyboardType="number-pad"
              style={style.input}
              placeholder="Enter your Address"
            />
            <TextInput
              keyboardType="number-pad"
              style={style.input}
              placeholder="Enter your Location"
            />
            <TextInput
              keyboardType="number-pad"
              style={style.input}
              placeholder="Enter your Exact Location"
            />
          </View>
          <TouchableOpacity onPress={changePage} style={style.button}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "500",
                fontSize: 15,
                color: "white",
              }}
            >
              Submit & Continue
            </Text>
          </TouchableOpacity>
        </ScrollView>
      )}
      {currentPage === "Page2" && (
        <View>
          <SpStoreRegister />
          <Button title="Go to Page 1" onPress={changePage} />
        </View>
      )}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: "#F0F0F0",
    color: "#424242",
    borderRadius: 8,
    underlineColorAndroid: "yourDesiredColor", // Change this to the color you want
    marginBottom: 15,
    selectionColor: "yourDesiredColor",
  },
  button: {
    marginTop: 5,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#673de7",
    paddingVertical: 12,
    borderRadius: 50,
  },
});

export default SpRegistration;

// import React, { useState } from "react";
// import { View, Text, Button } from "react-native";

// const SpRegistration = () => {

//   return (
//     <View>
//       {currentPage === "Page1" && (
//         <View>
//           <Text>This is Page 1</Text>
//           <Button title="Go to Page 2" onPress={changePage} />
//         </View>
//       )}

//       {currentPage === "Page2" && (
//         <View>
//           <Text>This is Page 2</Text>
//           <Button title="Go to Page 1" onPress={changePage} />
//         </View>
//       )}
//     </View>
//   );
// };

// export default SpRegistration;
