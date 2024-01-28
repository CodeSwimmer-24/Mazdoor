import { Linking, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";

const Share = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 18,
          fontWeight: "bold",
          color: "#673de6",
        }}
      >
        Share to your friends using this{" "}
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginTop: 30,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png",
          }}
          style={{
            height: 60,
            width: 60,
          }}
        />
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png",
          }}
          style={{
            height: 50,
            width: 50,
          }}
        />
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
          }}
          style={{
            height: 50,
            width: 50,
          }}
        />
        <Image
          source={{
            uri: "https://logos-world.net/wp-content/uploads/2020/11/Gmail-Logo-2020-present.jpg",
          }}
          style={{
            height: 40,
            width: 60,
          }}
        />
      </View>
      <Text
        style={{
          marginTop: 20,
          marginBottom: 10,
          fontWeight: "500",
          color: "#241c6a",
        }}
      >
        Copy Link
      </Text>
      <Text
        style={{ color: "lightgray" }}
        onPress={() => Linking.openURL("http://google.com")}
      >
        https://stackoverflow.com/questions/41754471/change-button-color-react-native
      </Text>
    </View>
  );
};

export default Share;

const styles = StyleSheet.create({
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
});
