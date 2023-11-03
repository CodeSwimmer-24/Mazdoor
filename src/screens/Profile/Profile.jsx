// import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
// import React, { useEffect, useState } from "react";
// import {
//   Appbar,
//   Avatar,
//   Title,
//   Caption,
//   TouchableRipple,
// } from "react-native-paper";
// import {
//   CreditCardIcon,
//   EnvelopeIcon,
//   MapIcon,
//   PhoneIcon,
//   ShareIcon,
//   UserCircleIcon,
//   PencilIcon,
//   ArrowLeftOnRectangleIcon,
//   Cog8ToothIcon,
// } from "react-native-heroicons/outline";
// import { useNavigation } from "@react-navigation/native";
// import axios from "axios";
// import { BASE_URL } from "../../axios/axios";

// const Profile = () => {
//   const navigation = useNavigation();

//   const [data, setData] = useState("");

//   useEffect(() => {
//     axios
//       .get(`${BASE_URL}/getProfile?emailId=fahadmahmood1200@gmail.com`)
//       .then((response) => {
//         setData(response.data);
//       });
//   }, [data]);

//   return (
//     <ScrollView style={{ backgroundColor: "white" }}>
//       <Appbar.Header>
//         <Appbar.BackAction onPress={navigation.goBack} />
//         <Appbar.Content title="Profile" />
//         <Appbar.Action
//           icon="pencil"
//           onPress={() => {
//             navigation.navigate("editProfile", {
//               emailId: data.emailId,
//             });
//           }}
//         />
//       </Appbar.Header>
//       <SafeAreaView style={styles.container}>
//         <View style={styles.userInfoSection}>
//           <View style={{ flexDirection: "row", marginTop: 15 }}>
//             <Avatar.Image
//               source={{
//                 uri: "https://api.adorable.io/avatars/80/abott@adorable.png",
//               }}
//               size={80}
//             />
//             <View style={{ marginLeft: 20 }}>
//               <Title
//                 style={[
//                   styles.title,
//                   {
//                     marginTop: 15,
//                     marginBottom: 5,
//                   },
//                 ]}
//               >
//                 {data.name}
//               </Title>
//               <Caption style={styles.caption}>@j_doe</Caption>
//             </View>
//           </View>
//         </View>

//         <View style={styles.userInfoSection}>
//           <View style={styles.row}>
//             <MapIcon color="#777777" size={20} />
//             <Text style={{ color: "#777777", marginLeft: 20 }}>
//               {data.address}
//             </Text>
//           </View>
//           <View style={styles.row}>
//             <PhoneIcon color="#777777" size={20} />
//             <Text style={{ color: "#777777", marginLeft: 20 }}>
//               {data.contactNo}
//             </Text>
//           </View>
//           <View style={styles.row}>
//             <EnvelopeIcon color="#777777" size={20} />
//             <Text style={{ color: "#777777", marginLeft: 20 }}>
//               {data.emailId}
//             </Text>
//           </View>
//         </View>
//         <View style={styles.menuWrapper}>
//           <TouchableRipple
//
//           >
//             <View style={styles.menuItem}>
//               <CreditCardIcon color="#21005d" size={25} />
//               <Text style={styles.menuItemText}>Payment</Text>
//             </View>
//           </TouchableRipple>
//           <TouchableRipple>
//             <View style={styles.menuItem}>
//               <ShareIcon color="#21005d" size={25} />
//               <Text style={styles.menuItemText}>Tell Your Friends</Text>
//             </View>
//           </TouchableRipple>
//           <TouchableRipple onPress={() => {}}>
//             <View style={styles.menuItem}>
//               <UserCircleIcon color="#21005d" size={25} />
//               <Text style={styles.menuItemText}>Support</Text>
//             </View>
//           </TouchableRipple>
//           <TouchableRipple onPress={() => {}}>
//             <View style={styles.menuItem}>
//               <Cog8ToothIcon color="#21005d" size={25} />
//               <Text style={styles.menuItemText}>Setting</Text>
//             </View>
//           </TouchableRipple>
//           <TouchableRipple
//             onPress={() => {
//               navigation.navigate("editProfile", {
//                 emailId: data.emailId,
//               });
//             }}
//           >
//             <View style={styles.menuItem}>
//               <PencilIcon color="#21005d" size={25} />
//               <Text style={styles.menuItemText}>Edit Profile</Text>
//             </View>
//           </TouchableRipple>
//           <TouchableRipple onPress={() => {}}>
//             <View style={styles.menuItem}>
//               <ArrowLeftOnRectangleIcon color="#21005d" size={25} />
//               <Text style={styles.menuItemText}>Logout</Text>
//             </View>
//           </TouchableRipple>
//         </View>
//       </SafeAreaView>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//   },
//   userInfoSection: {
//     paddingHorizontal: 25,
//     marginBottom: 25,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   caption: {
//     fontSize: 14,
//     lineHeight: 14,
//     fontWeight: "500",
//   },
//   row: {
//     flexDirection: "row",
//     marginBottom: 5,
//   },
//   infoBoxWrapper: {
//     flexDirection: "row",
//     height: 60,
//     shadowColor: "#52006A",
//     shadowOffset: { width: 10, height: 10 },
//     shadowOpacity: 0.8,
//     shadowRadius: 2,
//     elevation: 65,
//   },
//   infoBox: {
//     width: "50%",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   menuWrapper: {
//     marginTop: 5,
//   },
//   menuItem: {
//     flexDirection: "row",
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: "lightgray",
//     paddingHorizontal: 25,
//   },
//   menuItemText: {
//     color: "#21005d",
//     marginLeft: 20,
//     fontWeight: "500",
//     fontSize: 16,
//     lineHeight: 26,
//   },
// });

// export default Profile;

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  CreditCardIcon,
  MapPinIcon,
  PhoneIcon,
  ShareIcon,
} from "react-native-heroicons/outline";
import { LockClosedIcon, PencilIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { BASE_URL } from "../../axios/axios";

const Profile = () => {
  const navigation = useNavigation();

  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get(`${BASE_URL}/getProfile?emailId=fahadmahmood1200@gmail.com`)
      .then((response) => {
        setData(response.data);
      });
  }, [data]);

  return (
    <View style={{ backgroundColor: "white" }}>
      <View>
        <Image
          style={{ width: "100%", height: "50%" }}
          source={{
            uri: "https://img.freepik.com/premium-vector/air-conditioner-installation-vector-illustration_650808-128.jpg",
          }}
        />
        <Image
          source={{
            uri: "https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=",
          }}
          style={{
            height: 100,
            width: 100,
            borderRadius: 100,
            position: "absolute",
            top: 160,
            left: "38%",
          }}
        />

        <Text
          style={{
            fontSize: 28,
            fontWeight: 700,
            textAlign: "center",
            marginTop: 35,
            color: "#343434",
          }}
        >
          {data.name}
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontWeight: 400,
            textAlign: "center",
            marginTop: 2,
            color: "#343434",
          }}
        >
          {data.emailId}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MapPinIcon color="#21005d" size={12} />
            <Text
              style={{
                fontSize: 12,
                fontWeight: 300,
                textAlign: "center",
                marginTop: 2,
                color: "#343434",
                marginLeft: 2,
              }}
            >
              {data.address}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <PhoneIcon color="#21005d" size={12} />
            <Text
              style={{
                fontSize: 12,
                fontWeight: 300,
                textAlign: "center",
                marginTop: 2,
                color: "#343434",
                marginLeft: 2,
              }}
            >
              +91 {data.contactNo}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: -90 }}>
        {/* Subscription */}

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("subscribe");
          }}
          style={styles.menuContainer}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              <Image
                source={{
                  uri: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-icon.png",
                }}
                style={{ height: 30, width: 30, marginRight: 10 }}
              />
            </View>
            <View>
              <Text
                style={{ fontSize: 14, fontWeight: "bold", color: "#343434" }}
              >
                Subscriptions
              </Text>
              <Text
                style={{ fontSize: 10, fontWeight: "300", color: "#343434" }}
              >
                please Select your plan
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#4caf50" }}
            >
              ₹ 29
            </Text>
            <Text style={{ fontSize: 10, fontWeight: "300", color: "#343434" }}>
              Per Month
            </Text>
          </View>
        </TouchableOpacity>

        {/* Edit Profile */}

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("editProfile", {
              emailId: data.emailId,
            });
          }}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "95%",
            backgroundColor: "#fff4e5",
            marginLeft: 10,
            padding: 10,
            borderRadius: 7,
            marginTop: 15,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/9977/9977360.png",
                }}
                style={{ height: 30, width: 30, marginRight: 10 }}
              />
            </View>
            <View>
              <Text
                style={{ fontSize: 14, fontWeight: "bold", color: "#343434" }}
              >
                Edit Profile
              </Text>
              <Text
                style={{ fontSize: 10, fontWeight: "300", color: "#343434" }}
              >
                Make changes to profile details
              </Text>
            </View>
          </View>
          <View style={{ marginRight: 15 }}>
            <PencilIcon size={22} color="#663c00" />
          </View>
        </TouchableOpacity>

        {/* Share */}

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "95%",
            backgroundColor: "#e5f6fd",
            marginLeft: 10,
            padding: 10,
            borderRadius: 7,
            marginTop: 15,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              <Image
                source={{
                  uri: "https://i.pinimg.com/736x/8e/e9/89/8ee989250f90578d44d8888286aaa2c0.jpg",
                }}
                style={{ height: 30, width: 30, marginRight: 10 }}
              />
            </View>
            <View>
              <Text
                style={{ fontSize: 14, fontWeight: "bold", color: "#343434" }}
              >
                Share App
              </Text>
              <Text
                style={{ fontSize: 10, fontWeight: "300", color: "#343434" }}
              >
                Share this application with Friends
              </Text>
            </View>
          </View>
          <View style={{ marginRight: 15 }}>
            <ShareIcon size={22} color="rgb(3, 169, 244)" />
          </View>
        </TouchableOpacity>

        {/* Logout */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "95%",
            backgroundColor: "#fdeded",
            marginLeft: 10,
            padding: 10,
            borderRadius: 7,
            marginTop: 15,
            marginBottom: 15,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View>
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/657/657803.png",
                  }}
                  style={{ height: 30, width: 30, marginRight: 10 }}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#343434",
                  }}
                >
                  Log Out
                </Text>
              </View>
            </View>
          </View>
          <View style={{ marginRight: 15 }}>
            <LockClosedIcon size={22} color="rgb(239, 83, 80)" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "95%",
    backgroundColor: "#4caf501a",
    marginLeft: 10,
    padding: 10,
    marginTop: 12,
    borderRadius: 7,
  },
});
