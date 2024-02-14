import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import { Modal, PaperProvider, Portal } from "react-native-paper";
import axios from "axios";
import { BASE_URL } from "../../axios/axios";
import { useNavigation } from "@react-navigation/native";
import cancelled from "../../assets/cancelle.png";
import { CheckIcon, XMarkIcon } from "react-native-heroicons/solid";

const CancelModal = ({ hideModal, containerStyle, modelData }) => {
  const navigation = useNavigation();

  const handleCancel = () => {
    axios
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
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={cancelled}
            style={{
              height: 80,
              width: 80,
            }}
          />
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity
              onPress={noBooking}
              style={{
                backgroundColor: "#f443361a",
                paddingHorizontal: 10,
                paddingVertical: 10,
                borderRadius: 50,
              }}
            >
              <XMarkIcon size={25} color="red" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleCancel}
              style={{
                backgroundColor: "#4caf501a",
                paddingHorizontal: 10,
                paddingVertical: 10,
                borderRadius: 50,
              }}
            >
              <CheckIcon size={25} color="green" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

export default CancelModal;
