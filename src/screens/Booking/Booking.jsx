import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import {
  ArchiveBoxArrowDownIcon,
  TagIcon,
} from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const Booking = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Appbar.Header>
        <Appbar.BackAction />
        <Appbar.Content title="🔖Booking" />
      </Appbar.Header>

      <TouchableOpacity style={style.wrapper}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={style.spTitle}>Chotu Plumber</Text>
            <Text style={style.spName}>Rashid Chotu</Text>
            <Text style={style.spAddress}>Near old Masjid Makhdumpur</Text>
            <Text style={style.spAddress}>50 - M </Text>
          </View>
          <View style={{ padding: 12 }}>
            <Image
              style={{ height: 30, width: 30, marginBottom: 15 }}
              source={{
                uri: "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-mobile-software-icon-png-image_6315991.png",
              }}
            />
            <Image
              style={{ height: 30, width: 30 }}
              source={{
                uri: "https://companieslogo.com/img/orig/TRUE-B.ST-e8d1a343.png?t=1664646245",
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            marginBottom: 10,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              marginLeft: 30,
              paddingLeft: 40,
              paddingRight: 40,
              paddingTop: 7,
              borderRadius: 4,
              paddingBottom: 7,
              backgroundColor: "#ffebee",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <ArchiveBoxArrowDownIcon color="#ef5350" />
              <Text
                style={{
                  color: "#ef5350",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginLeft: 8,
                }}
              >
                Cancel
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                marginLeft: 10,
                marginRight: 30,
                paddingLeft: 40,
                paddingRight: 40,
                paddingTop: 8,
                borderRadius: 4,
                paddingBottom: 8,
                backgroundColor: "#21005d",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("bookingPopup");
                }}
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <StarIcon color="#fff" size={18} />
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: "bold",
                    marginLeft: 8,
                  }}
                >
                  Rate Me
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    margin: 10,
    borderRadius: 8,
  },
  spTitle: {
    paddingTop: 5,
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: "700",
    color: "#21005d",
  },
  spName: {
    paddingLeft: 20,
    paddingTop: 0,
    color: "gray",
    fontSize: 16,
    fontWeight: "400",
  },
  spAddress: {
    paddingLeft: 20,
    paddingTop: 0,
    fontSize: 14,
    fontWeight: "300",
  },
  spGender: {
    paddingTop: 0,
    paddingLeft: 20,
    fontWeight: "300",
    fontSize: 12,
  },
  contactImages: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Booking;
