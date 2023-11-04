import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { Chip } from "react-native-paper";

const data = [
  {
    name: "Rashid Chotu",
    age: 23,
    gender: "Male",
    shopName: "Chotu Plumber Shop",
    status: "On Going",
    date: "Tue, 27 Mar",
    time: "07:35",
    address: "Near old masjid, Batla House",
    phoneNumber: "123",
  },
  {
    name: "Rashid Chotu",
    age: 23,
    gender: "Male",
    shopName: "Chotu Plumber Shop",
    status: "On Going",
    date: "Tue, 27 Mar",
    time: "07:35",
    address: "Near old masjid, Batla House",
    phoneNumber: "123",
  },
  {
    name: "Rashid Chotu",
    age: 23,
    gender: "Male",
    shopName: "Chotu Plumber Shop",
    status: "On Going",
    date: "Tue, 27 Mar",
    time: "07:35",
    address: "Near old masjid, Batla House",
    phoneNumber: "123",
  },
  {
    name: "Rashid Chotu",
    age: 23,
    gender: "Male",
    shopName: "Chotu Plumber Shop",
    status: "On Going",
    date: "Tue, 27 Mar",
    time: "07:35",
    address: "Near old masjid, Batla House",
    phoneNumber: "123",
  },
  {
    name: "Rashid Chotu",
    age: 23,
    gender: "Male",
    shopName: "Chotu Plumber Shop",
    status: "On Going",
    date: "Tue, 27 Mar",
    time: "07:35",
    address: "Near old masjid, Batla House",
    phoneNumber: "123",
  },
];

const Booking = () => {
  return (
    <ScrollView style={{ backgroundColor: "white", marginBottom: 50 }}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={{ color: "white", fontSize: 22, fontWeight: "700" }}>
            Bookings
          </Text>
          <MagnifyingGlassIcon color="white" size={25} />
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Chip
            mode="flat"
            icon="wrench"
            onPress={() => console.log("Pressed")}
          >
            Electrician
          </Chip>
          <Chip
            mode="flat"
            icon="hammer"
            onPress={() => console.log("Pressed")}
          >
            Plumber
          </Chip>
          <Chip mode="flat" icon="more" onPress={() => console.log("Pressed")}>
            More
          </Chip>
        </View>
      </View>
      <ScrollView style={{ marginTop: -60 }}>
        {data.map((data) => {
          return (
            <TouchableOpacity style={styles.card}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: 20,
                    paddingTop: 10,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698624000&semt=ais",
                    }}
                    style={{ height: 30, width: 30, borderRadius: 50 }}
                  />
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 14,
                      fontWeight: "700",
                      color: "#343434",
                    }}
                  >
                    {data.name}
                  </Text>
                  <Text
                    style={{ marginLeft: 10, fontSize: 12, fontWeight: "300" }}
                  >
                    {data.age} - {data.gender}
                  </Text>
                </View>
                <TouchableOpacity style={{ paddingRight: 10, paddingTop: 10 }}>
                  <Image
                    source={{
                      uri: "https://w7.pngwing.com/pngs/915/706/png-transparent-blue-call-icon-dialer-android-google-play-telephone-phone-blue-text-telephone-call.png",
                    }}
                    style={{
                      height: 40,
                      width: 40,
                    }}
                  />
                </TouchableOpacity>
              </View>

              <View>
                <Text
                  style={{
                    marginLeft: 20,
                    marginTop: 0,
                    fontSize: 18,
                    fontWeight: "800",
                    color: "#343434",
                  }}
                >
                  {data.shopName}
                </Text>
              </View>
              <View
                style={{
                  marginTop: 10,
                  marginLeft: 20,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontWeight: "800", color: "#4caf50" }}>
                  Status: {data.status}
                </Text>
                <Text
                  style={{ marginLeft: 20, fontWeight: "300", fontSize: 12 }}
                >
                  {data.date} | {data.time}
                </Text>
              </View>
              <View style={{ marginTop: 5, marginLeft: 20 }}>
                <Text
                  style={{ fontWeight: "600", color: "gray", fontSize: 12 }}
                >
                  {data.address} Delhi
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  style={{
                    marginLeft: 20,
                    marginTop: 15,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: "900",
                      color: "#f44336",
                    }}
                  >
                    ╳ Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#4caf501a",
                    marginLeft: 20,
                    marginTop: 15,
                    borderRadius: 3,
                  }}
                >
                  <Text
                    style={{
                      paddingTop: 3,
                      paddingBottom: 3,
                      marginLeft: 10,
                      marginRight: 10,
                      fontSize: 13,
                      fontWeight: "700",
                      color: "#4caf50",
                    }}
                  >
                    Mark Completed
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </ScrollView>
  );
};

export default Booking;

const styles = StyleSheet.create({
  container: {
    height: 220,
    width: "100%",
    backgroundColor: "#5000e6",
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 30,
    marginTop: 10,
  },
  card: {
    marginTop: 15,
    marginBottom: 15,
    height: 180,
    width: "90%",
    marginLeft: 20,
    backgroundColor: "#fff",
    elevation: 5, // Set the elevation to control the shadow depth
    shadowColor: "rgba(0, 0, 0, 1)", // The shadow color with opacity
    shadowOffset: { width: 0, height: 5 }, // Horizontal and vertical shadow offset
    shadowRadius: 15, // Radius of the shadow
    borderRadius: 5, // Radius of the border
  },
});
