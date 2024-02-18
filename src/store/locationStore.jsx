import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useUserLocality = create(
  devtools(
    persist(
      (set) => ({
        locality: "",
        exactLine: "",
        storeName: "",
        storeContact: "",

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

        exactLocationAddress: (loc) => {
          set(() => ({
            exactLine: loc,
          }));
        },
      }),
      {
        name: "userLocation",
      }
    )
  )
);

export default useUserLocality;
