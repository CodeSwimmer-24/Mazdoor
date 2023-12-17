import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { BASE_URL } from "../../../axios/axios";

const AddService = () => {
  const [services, setServices] = useState([
    {
      emailId: "techpedia.tech24@gmail.com",
      price: 0,
      serviceDescription: "",
      serviceName: "",
      workingHours: "09:00AM-6:00PM",
    },
  ]);

  const handleChange = (text, name, index) => {
    const list = [...services];
    list[index][name] = name === "price" ? +text : text;
    setServices(list);
  };

  const addService = () => {
    setServices([
      ...services,
      {
        serviceName: "",
        price: "0",
        emailId: "techpedia.tech24@gmail.com",
        workingHours: "10-13",
        serviceDescription: "",
      },
    ]);
  };

  const removeService = (index) => {
    const list = [...services];
    list.splice(index, 1);
    setServices(list);
  };

  const handleSubmit = () => {
    axios
      .post(`${BASE_URL}/addService`, services)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(services.serviceName, "O haa");

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={{ marginTop: 40, marginLeft: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 700, color: "#21005d" }}>
          Add Your Service and Pricing
        </Text>
      </View>
      {services.map((service, index) => {
        return (
          <View key={index}>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <TextInput
                value={services[index].serviceName}
                onChangeText={(text) =>
                  handleChange(text, "serviceName", index)
                }
                placeholder="Service name"
                style={style.inputBox}
                required
              />
              <TextInput
                value={services[index].price}
                onChangeText={(text) => handleChange(text, "price", index)}
                placeholder="Service Price"
                keyboardType="numeric"
                style={style.inputBox}
                required
              />
            </View>
            <TextInput
              value={services[index].serviceDescription}
              onChangeText={(text) =>
                handleChange(text, "serviceDescription", index)
              }
              placeholder="Service Description"
              style={style.inputDescBox}
              required
            />
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              {services.length > 1 && (
                <TouchableOpacity
                  onPress={() => removeService(index)}
                  style={{
                    paddingLeft: 12,
                    paddingRight: 12,
                    paddingTop: 6,
                    paddingBottom: 6,
                    backgroundColor: "#21005d",
                    borderRadius: 5,
                  }}
                >
                  <Text
                    style={{ color: "white", fontSize: 12, fontWeight: "700" }}
                  >
                    - Remove
                  </Text>
                </TouchableOpacity>
              )}
              {services.length - 1 === index && services.length < 10 && (
                <TouchableOpacity
                  onPress={addService}
                  style={{
                    paddingLeft: 12,
                    paddingRight: 12,
                    paddingTop: 6,
                    paddingBottom: 6,
                    backgroundColor: "#21005d",
                    borderRadius: 5,
                    marginLeft: 25,
                  }}
                >
                  <Text
                    style={{ color: "white", fontSize: 12, fontWeight: "700" }}
                  >
                    + Add Service
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        );
      })}

      <View style={{ margin: 20 }}>
        <View style={{ marginTop: 20 }}>
          <Button
            disabled={services.serviceName === undefined}
            onPress={handleSubmit}
            title="Submit 👉"
            color="#21005d"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  inputBox: {
    borderWidth: 1,
    borderColor: "lightgray",
    paddingLeft: 12,
    paddingTop: 4,
    width: "45%",
    paddingBottom: 4,
    borderRadius: 6,
  },
  inputDescBox: {
    margin: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    paddingLeft: 12,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 6,
  },
});

export default AddService;
