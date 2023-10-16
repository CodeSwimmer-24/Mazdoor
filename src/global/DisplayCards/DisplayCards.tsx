import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MapPinIcon, StarIcon } from "react-native-heroicons/outline";

import { Appbar } from "react-native-paper";

const DisplayCards = () => {
  const {
    params: { type },
  }: any = useRoute();

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={navigation.goBack} />
        <Appbar.Content title={type} />
      </Appbar.Header>
      <TouchableOpacity style={style.wrapper}>
        <Image
          style={style.image}
          source={{
            uri: "",
          }}
        />
        <View style={style.container}>
          <Text style={style.title}>Raja Electrical</Text>
          <View style={style.cardContainer}>
            <StarIcon opacity={0.5} size={22} color="#21005d" />
            <Text style={style.genre}>
              More than <Text style={style.ratingText}>Near by You</Text> {type}
            </Text>
          </View>
          <View style={style.locationContainer}>
            <MapPinIcon color="gray" opacity={0.5} size={22} />
            <Text style={style.location}>Nearby . Jama Masjid Shaheen Bag</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    marginRight: 13,
    marginLeft: 13,
    marginTop: 10,
    borderRadius: 10,
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  },
  headerText: {
    backgroundColor: "gray",
  },
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 14,
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginRight: 20,
  },
  locationContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  image: {
    height: 120,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontWeight: "700",
    color: "#242424",
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  ratingText: {
    color: "#21005d",
    fontWeight: "bold",
    fontSize: 14,
  },
  genre: {
    color: "gray",
    paddingLeft: 10,
  },
  location: {
    fontSize: 10,
    color: "gray",
  },
});

export default DisplayCards;

// import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
// import React from "react";
// import { StarIcon, MapPinIcon } from "react-native-heroicons/solid";
// import { useNavigation } from "@react-navigation/native";

// const cards: any = [
//   {
//     id: 1,
//     imgUrl:
//       "https://www.bharattesthouse.com/img/Our-services/Testing/Electrical-Appliances.jpg",
//     title: "Electronic Item Repairing",
//     rating: 3,
//     genre: "100+",
//     address: "Batla House",
//     short_description: "Hello World",
//     services: "",
//   },
//   {
//     id: 2,
//     imgUrl:
//       "https://i0.wp.com/www.cdccomputers.com/wp-content/uploads/2020/09/cellphonerepair.png?fit=1200%2C486&ssl=1",
//     title: "Mobile Device Repairing",
//     rating: 3,
//     genre: "50",
//     address: "Batla House",
//     short_description: "Hello World",
//     services: "",
//   },
//   {
//     id: 3,
//     imgUrl:
//       "https://www.ulcdn.net/media/furniture-stores/ncr/mallofindia/mobile/slideshow/Noida.jpeg?1531131943",
//     title: "Wood and Craft",
//     rating: 3,
//     genre: "Top Rating",
//     address: "Batla House",
//     short_description: "Hello World",
//     services: "",
//   },
//   {
//     id: 4,
//     imgUrl:
//       "https://www.ulcdn.net/media/furniture-stores/ncr/mallofindia/mobile/slideshow/Noida.jpeg?1531131943",
//     title: "Wood and Craft",
//     rating: 3,
//     genre: "Top Rating",
//     address: "Batla House",
//     short_description: "Hello World",
//     services: "",
//   },
//   {
//     id: 5,
//     imgUrl:
//       "https://www.ulcdn.net/media/furniture-stores/ncr/mallofindia/mobile/slideshow/Noida.jpeg?1531131943",
//     title: "Wood and Craft",
//     rating: 3,
//     genre: "Top Rating",
//     address: "Batla House",
//     short_description: "Hello World",
//     services: "",
//   },
//   {
//     id: 6,
//     imgUrl:
//       "https://www.ulcdn.net/media/furniture-stores/ncr/mallofindia/mobile/slideshow/Noida.jpeg?1531131943",
//     title: "Wood and Craft",
//     rating: 3,
//     genre: "Top Rating",
//     address: "Batla House",
//     short_description: "Hello World",
//     services: "",
//   },
// ];

// const TopServices = () => {
//   const navigation = useNavigation();

//   return (
//     <>
//       {cards.map((card: any) => {
//         return (
//           <TouchableOpacity
//             key={card.id}
//             onPress={() => {
//               navigation.navigate("displayCards", {
//                 type: card.title,
//               });
//             }}
//             style={style.wrapper}
//           >
//             <Image
//               style={style.image}
//               source={{
//                 uri: card.imgUrl,
//               }}
//             />
//             <View style={style.container}>
//               <Text style={style.title}>{card.title}</Text>
//               <View style={style.cardContainer}>
//                 <StarIcon opacity={0.5} size={22} color="#21005d" />
//                 <Text style={style.genre}>
//                   More than <Text style={style.ratingText}>{card.genre}</Text>{" "}
//                   members
//                 </Text>
//               </View>
//               <View style={style.locationContainer}>
//                 <MapPinIcon color="gray" opacity={0.5} size={22} />
//                 <Text style={style.location}>Nearby . {card.address}</Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//         );
//       })}
//     </>
//   );
// };

// const style = StyleSheet.create({
//   wrapper: {
//     backgroundColor: "white",
//     marginRight: 13,
//     marginLeft: 13,
//     marginTop: 10,
//     borderRadius: 10,
//     boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
//   },
//   container: {
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingBottom: 14,
//   },
//   cardContainer: {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 5,
//     marginRight: 20,
//   },
//   locationContainer: {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 10,
//   },
//   image: {
//     height: 120,
//     width: "100%",
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//   },
//   title: {
//     fontWeight: "700",
//     color: "#242424",
//     fontSize: 20,
//     paddingTop: 10,
//     paddingBottom: 5,
//   },
//   ratingText: {
//     color: "#21005d",
//     fontWeight: "bold",
//     fontSize: 14,
//   },
//   genre: {
//     color: "gray",
//   },
//   location: {
//     fontSize: 10,
//     color: "gray",
//   },
// });

// export default TopServices;
