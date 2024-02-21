import create from "zustand";
import AsyncStorage from "@react-native-community/async-storage";
import { devtools, persist } from "zustand/middleware";

const newUserStore = (set) => ({
  newUser: false,
  checkNewUser: (isNewUser) => {
    set((state) => ({
      newUser: isNewUser,
    }));
  },
});

const useUserStore = create(
  devtools(
    persist(newUserStore, {
      name: "newUser",
      getStorage: () => AsyncStorage, // AsyncStorage for storage
    })
  )
);

export default useUserStore;
