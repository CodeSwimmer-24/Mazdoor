import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import plumber from "../../assets/plumber.png";
import Electrician from "../../assets/mechanic.png";
import Mechanic from "../../assets/mechanicCar.png";
import Carpenter from "../../assets/carpenter.png";
import Painter from "../../assets/paint-roller.png";
import Elec from "../../assets/elec.png";
import More from "../../assets/more1.png";
import Truck from "../../assets/truck.png";

const Categories = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
        <Text
          style={{
            padding: 5,
            fontSize: 18,
            fontWeight: "600",
            color: "#241c6a",
          }}
        >
          Services
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Services");
          }}
        >
          <Text
            style={{
              fontWeight: "600",
              color: "#673de6",
            }}
          >
            {" "}
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("displayCards", {
              type: "Electrician",
            });
          }}
        >
          <View
            style={[
              styles.images,
              {
                backgroundColor: "rgb(237, 247, 237)",
              },
            ]}
          >
            <Image source={Electrician} style={styles.icons} />
          </View>
          <Text style={styles.text}>Electrician</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("displayCards", {
              type: "Plumber",
            });
          }}
        >
          <View
            style={[
              styles.images,
              {
                backgroundColor: "rgb(249 220 220)",
              },
            ]}
          >
            <Image source={plumber} style={styles.icons} />
          </View>
          <Text style={styles.text}>Plumber</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("displayCards", {
              type: "Carpenter",
            });
          }}
        >
          <View
            style={[
              styles.images,
              {
                backgroundColor: "#fff4e5",
              },
            ]}
          >
            <Image source={Carpenter} style={styles.icons} />
          </View>
          <Text style={styles.text}>Carpenter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("displayCards", {
              type: "Painter",
            });
          }}
        >
          <View
            style={[
              styles.images,
              {
                backgroundColor: "rgb(229, 246, 253)",
              },
            ]}
          >
            <Image source={Painter} style={styles.icons} />
          </View>
          <Text style={styles.text}>Painter</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("electronics");
          }}
        >
          <View
            style={[
              styles.images,
              {
                backgroundColor: "rgb(229, 246, 253)",
              },
            ]}
          >
            <Image source={Elec} style={styles.icons} />
          </View>
          <Text style={styles.text}>Electronics {"\n"} Repair</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("displayCards", {
              type: "Shifting",
            });
          }}
        >
          <View
            style={[
              styles.images,
              {
                backgroundColor: "#FFE4C4",
              },
            ]}
          >
            <Image source={Truck} style={styles.icons} />
          </View>
          <Text style={styles.text}>Shifting</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("displayCards", {
              type: "Mechanic",
            });
          }}
        >
          <View
            style={[
              styles.images,
              {
                backgroundColor: "#EFDECD",
              },
            ]}
          >
            <Image source={Mechanic} style={styles.icons} />
          </View>
          <Text style={styles.text}>Mechanic</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Services");
          }}
        >
          <View
            style={[
              styles.images,
              {
                backgroundColor: "#ebe4ff",
              },
            ]}
          >
            <Image source={More} style={styles.icons} />
          </View>
          <Text style={styles.text}>More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 5,
    alignItems: "center",
  },
  images: {
    padding: 12,
    borderRadius: 50,
    alignSelf: "center",
    justifyContent: "center",
  },
  icons: {
    height: 25,
    width: 25,
    alignSelf: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 2,
    fontSize: 12,
    textAlign: "center",
    fontWeight: "600",
    color: "#241c6a",
  },
});

export default Categories;

//  onPress={() => {
//               navigation.navigate("displayCards", {
//                 type: categories.title,
//               });
//             }}
