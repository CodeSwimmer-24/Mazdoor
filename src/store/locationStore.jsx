import create from "zustand";

import { devtools, persist } from "zustand/middleware";

const localityStore = (set) => ({
  locality: "",
  address: (loc) => {
    set((state) => ({
      locality: loc,
    }));
  },
});

const useUserLocality = create(
  devtools(
    persist(localityStore, {
      name: "locality",
    })
  )
);

export default useUserLocality;
