import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SmartTv from "../../assets/smart-tv.png";
import fridge from "../../assets/smart.png";
import ac from "../../assets/ac.png";
import washing from "../../assets/washing.png";
import { useNavigation } from "@react-navigation/native";

const electronicsCategory = [
  {
    type: "tvRepair",
    name: "TV Repair",
    image: SmartTv,
  },
  {
    type: "fridgeRepair",
    name: "Fridge Repair",
    image: fridge,
  },
  {
    type: "acRepair",
    name: "AC Repair",
    image: ac,
  },
  {
    type: "washingMachine",
    name: "Washing Machine",
    image: washing,
  },
];
const Electronics = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{
        backgroundColor: "#ffff",
      }}
    >
      <SafeAreaView>
        <Text
          style={{
            paddingVertical: 20,
            paddingHorizontal: 20,
            fontWeight: "bold",
            fontSize: 22,
            color: "#2f1c6a",
          }}
        >
          Electronic Repair
        </Text>
      </SafeAreaView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        {electronicsCategory.map((electronicCategory) => {
          return (
            <TouchableOpacity
              style={{
                width: "90%",
                marginTop: 10,
              }}
              key={electronicCategory.name}
              onPress={() => {
                navigation.navigate("displayCards", {
                  type: electronicCategory.type,
                });
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  elevation: 6,
                }}
              >
                <Image
                  source={electronicCategory.image}
                  style={{
                    height: 45,
                    width: 45,
                    marginLeft: 10,
                    marginRight: 0,
                  }}
                />

                <View
                  style={{
                    paddingLeft: 15,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "700",
                      color: "#2f1c6a",
                    }}
                  >
                    {electronicCategory.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      marginTop: 2,
                      color: "gray",
                      fontWeight: "300",
                    }}
                  >
                    View all TV Repair Service providers
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Electronics;
