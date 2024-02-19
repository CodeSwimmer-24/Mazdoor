import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-community/async-storage";

const useUserLocality = create(
  devtools(
    persist(
      (set) => ({
        locality: "",
        exactLine: "",
        storeName: "",
        storeContact: "",
        storeBuildingAddress: "",

        userName: (name) => {
          set(() => ({
            storeName: name,
          }));
        },
        phoneNumber: (number) => {
          set(() => ({
            storeContact: number,
          }));
        },
        address: (loc) => {
          set(() => ({
            locality: loc,
          }));
        },
        buildingAddress: (address) => {
          set(() => ({
            storeBuildingAddress: address,
          }));
        },

        exactLocationAddress: (loc) => {
          set(() => ({
            exactLine: loc,
          }));
        },
      }),
      {
        name: "userLocation",
        getStorage: () => AsyncStorage, // AsyncStorage for storage
      }
    )
  )
);

export default useUserLocality;
