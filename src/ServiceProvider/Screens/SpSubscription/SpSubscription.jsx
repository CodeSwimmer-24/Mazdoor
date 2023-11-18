import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Chip, RadioButton } from "react-native-paper";

const cards = [
  {
    id: 1,
    price: 200,
    description: "Heelo boy",
  },
  {
    id: 2,
    price: 400,
    description: "Heelo boy",
  },
  {
    id: 3,
    price: 300,
    description: "Heelo boy",
  },
];

const SpSubscription = () => {
  const [checked, setChecked] = React.useState("first");
  const [active, setActive] = useState(2);

  const handleCardPress = (id) => {
    setActive(id);
  };

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Text
        style={{
          marginTop: 50,
          textAlign: "center",
          fontSize: 18,
          padding: 10,
          fontWeight: "700",
          color: "#21005d",
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
                  height: 130,
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
                    color: "#21005d",
                  }}
                >
                  ₹ {card.price}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "400",
                    marginLeft: 20,
                    color: "#21005d",
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
          height: 50,
          backgroundColor: "#21005d",
          marginLeft: 20,
          marginTop: 30,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 17,
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
