import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import {
  ArchiveBoxArrowDownIcon,
  TagIcon,
} from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";

const Booking = () => {
  return (
    <ScrollView>
      <Appbar.Header>
        <Appbar.BackAction />
        <Appbar.Content title="🔖Booking" />
      </Appbar.Header>
      <View>
        <View style={style.wrapper}>
          <Text
            style={{
              paddingTop: 5,
              paddingLeft: 20,
              fontSize: 20,
              fontWeight: "700",
              color: "#21005d",
            }}
          >
            Chotu Plumber
          </Text>
          <Text
            style={{
              paddingLeft: 20,
              paddingTop: 0,
              fontSize: 14,
              fontWeight: "300",
            }}
          >
            Near Jama Masjid
          </Text>
          <Text style={{ paddingTop: 5, paddingLeft: 20, fontSize: 16 }}>
            Rashid Chotu
          </Text>
          <Text
            style={{
              paddingTop: 0,
              paddingLeft: 20,
              fontWeight: "300",
              fontSize: 12,
            }}
          >
            50 - Male
          </Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <View
              style={{
                marginLeft: 10,
                paddingLeft: 20,
                paddingRight: 20,

                borderRadius: 10,

                // backgroundColor: "#dcf8c6",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Image
                  style={{ height: 20, width: 20 }}
                  source={{
                    uri: "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-mobile-software-icon-png-image_6315991.png",
                  }}
                />
                <Text
                  style={{
                    color: "#075e54",
                    fontSize: 14,
                    fontWeight: "bold",
                    marginLeft: 8,
                  }}
                >
                  WhatsApp
                </Text>
              </View>
            </View>
            <View>
              <View
                style={{
                  marginLeft: 10,
                  paddingLeft: 20,
                  paddingRight: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 20,
                  }}
                >
                  <Image
                    style={{ height: 20, width: 20 }}
                    source={{
                      uri: "https://companieslogo.com/img/orig/TRUE-B.ST-e8d1a343.png?t=1664646245",
                    }}
                  />
                  <Text
                    style={{
                      color: "#318ce7",
                      fontSize: 14,
                      fontWeight: "bold",
                      marginLeft: 8,
                    }}
                  >
                    Call Me
                  </Text>
                </View>
              </View>
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
                <View style={{ flexDirection: "row", alignItems: "center" }}>
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
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
  },
});

export default Booking;
