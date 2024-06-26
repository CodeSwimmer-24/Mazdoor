import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import { Modal, PaperProvider, Portal } from "react-native-paper";
import { client } from "../../client";
import { BASE_URL } from "../../axios/axios";
import { useNavigation } from "@react-navigation/native";

const CancelModal = ({ hideModal, containerStyle, modelData }) => {
  const navigation = useNavigation();

  const handleCancel = () => {
    client
      .put(
        `${BASE_URL}/updateBookingStatus?bookingId=${modelData}&status=CANCELLED`
      )
      .then((response) => {
        console.log(response.data);
        hideModal(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const noBooking = () => {
    hideModal(false);
  };

  return (
    <Portal>
      <Modal
        visible={true}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: "https://static.vecteezy.com/system/resources/previews/002/608/282/original/mobile-application-warning-alert-web-button-menu-digital-flat-style-icon-free-vector.jpg",
            }}
            style={{
              height: 100,
              width: 100,
            }}
          />
          <Text
            style={{
              paddingTop: 10,
              fontSize: 16,
              fontWeight: "700",
              color: "#241c6a",
            }}
          >
            Are you sure you want to Cancel ?
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              onPress={noBooking}
              style={{
                backgroundColor: "#f443361a",
                marginRight: 30,
                paddingLeft: 30,
                paddingRight: 30,
                paddingTop: 5,
                paddingBottom: 5,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "700",
                  color: "#f44336",
                }}
              >
                NO
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleCancel}
              style={{
                backgroundColor: "#4caf501a",
                paddingLeft: 30,
                paddingRight: 30,
                paddingTop: 5,
                paddingBottom: 5,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "700",
                  color: "#4caf50",
                }}
              >
                YES
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

export default CancelModal;
