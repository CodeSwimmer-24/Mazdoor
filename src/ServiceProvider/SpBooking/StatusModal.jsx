import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { client } from "../../client";
import { BASE_URL } from "../../axios/axios";

const StatusModal = () => {
  const {
    params: { bookingId },
  } = useRoute();

  const navigation = useNavigation();

  const handleChangeStatus = (status) => {
    client
      .put(
        `${BASE_URL}/updateBookingStatus?bookingId=${bookingId}&status=${status}`
      )
      .then((response) => {
        console.log(response);
      });
    navigation.navigate("SpBooking");
  };
  return (
    <View style={style.container}>
      <Text
        style={{
          marginTop: 20,
          fontWeight: "bold",
          fontSize: 18,
          color: "#241c6a",
        }}
      >
        Please select your current booking status !
      </Text>
      <TouchableOpacity
        onPress={() => handleChangeStatus("COMPLETED")}
        style={[
          style.status,
          {
            backgroundColor: "rgba(76,175,80,0.1)",
          },
        ]}
      >
        <Text
          style={[
            style.statusText,
            {
              color: "rgba(76,175,80,1)",
            },
          ]}
        >
          COMPLETED
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleChangeStatus("PENDING")}
        style={[
          style.status,
          {
            backgroundColor: "#fff4e5",
          },
        ]}
      >
        <Text
          style={[
            style.statusText,
            {
              color: "#663c00",
            },
          ]}
        >
          PENDING
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleChangeStatus("PENDING")}
        style={[
          style.status,
          {
            backgroundColor: "rgba(55, 111, 208,0.1)",
          },
        ]}
      >
        <Text
          style={[
            style.statusText,
            {
              color: "rgba(55, 111, 208,1)",
            },
          ]}
        >
          WORKING
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleChangeStatus("CANCELLED")}
        style={[
          style.status,
          {
            backgroundColor: "rgba(244, 67, 54,0.1)",
          },
        ]}
      >
        <Text
          style={[
            style.statusText,
            {
              color: "rgba(244, 67, 54,1)",
            },
          ]}
        >
          CANCEL
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: "#ffff",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "70%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 20,
  },
  status: {
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
    width: "90%",
    borderRadius: 5,
  },
  statusText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});

export default StatusModal;
