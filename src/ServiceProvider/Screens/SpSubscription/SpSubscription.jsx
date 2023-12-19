import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Chip, RadioButton } from "react-native-paper";
import { BASE_URL } from "../../../axios/axios";
import axios from "axios";

const SpSubscription = () => {
  const [checked, setChecked] = React.useState("first");
  const [active, setActive] = useState(2);
  const [cards, setCards] = useState([]);

  const handleCardPress = (id) => {
    setActive(id);
  };

  const getSubscription = () => {
    axios.get(`${BASE_URL}/getAllSubscription/true`).then((res) => {
      console.log(res.data, "SUBS");
      setCards(res.data);
    });
  };

  useEffect(() => {
    getSubscription();
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Text
        style={{
          marginTop: 50,
          textAlign: "center",
          fontSize: 18,
          padding: 10,
          fontWeight: "700",
          color: "#673de6",
        }}
      >
        Choose the Subscriptions length thats work for you
      </Text>
      <View>
        {cards.map((card) => {
          return (
            <TouchableOpacity
              onPress={() => handleCardPress(card.id)}
              key={card.id}
              style={[
                {
                  height: 100,
                  width: "90%",
                  backgroundColor: "#f8f8ff",
                  marginTop: 20,
                  marginLeft: 20,
                  flexDirection: "row",
                  alignItems: "center",
                  borderRadius: 10,
                  borderWidth: 3,
                  borderColor: "#f8f8ff",
                },
                active === card.id && {
                  borderWidth: 3,
                  borderColor: "#9370db",
                },
              ]}
            >
              <View
                style={{
                  marginLeft: 15,
                }}
              >
                <RadioButton
                  value="first"
                  status={active === card.id ? "checked" : "unchecked"}
                  onPress={() => setChecked("first")}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    marginLeft: 15,
                    color: "#673de6",
                  }}
                >
                  ₹ {card.price}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "400",
                    marginLeft: 20,
                    color: "#673de6",
                  }}
                >
                  Recurring every Month
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity
        style={{
          width: "90%",
          height: 40,
          backgroundColor: "#673de6",
          marginLeft: 20,
          marginTop: 30,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 14,
            fontWeight: "600",
            marginTop: 12,
          }}
        >
          SUBSCRIBE
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SpSubscription;
