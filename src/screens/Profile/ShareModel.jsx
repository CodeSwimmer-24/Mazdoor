import { View, Text, Modal, TouchableOpacity, Image } from "react-native";
import React from "react";
import { XMarkIcon } from "react-native-heroicons/solid";

const ShareModel = ({ shareModal, setShareModel }) => {
  return (
    <Modal visible={shareModal} animationType="slide" transparent={true}>
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
            height: "50%",
            elevation: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: 25,
              marginTop: 25,
            }}
          >
            <TouchableOpacity
              onPress={() => setShareModel(false)}
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
                Share this App
              </Text>
            </View>
          </View>
          <View>
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
                  height: 50,
                  width: 50,
                }}
              />
              <Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png",
                }}
                style={{
                  height: 40,
                  width: 40,
                }}
              />
              <Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
                }}
                style={{
                  height: 40,
                  width: 40,
                }}
              />
            </View>
            <View
              style={{
                marginHorizontal: 30,
              }}
            >
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
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ShareModel;
