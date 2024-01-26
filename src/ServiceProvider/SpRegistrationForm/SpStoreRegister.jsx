import { View, Text, ScrollView, TextInput } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

const SpStoreRegister = () => {
  return (
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
            fontSize: 32,
            fontWeight: "700",
            color: "#2f1c6a",
            marginBottom: 20,
          }}
        >
          Register Your New Store
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
          placeholder="Enter your Store Name"
        />
        <TextInput
          keyboardType="number-pad"
          style={style.input}
          placeholder="Choose Your Service Type"
        />
        <TextInput
          style={style.messageInput}
          placeholder="Type your message..."
          multiline
          textAlignVertical="top"
        />
      </View>
    </ScrollView>
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
  messageInput: {
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
    height: 100,
    textAlign: "start",
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

export default SpStoreRegister;
