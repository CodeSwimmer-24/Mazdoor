import create from "zustand";

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
    })
  )
);

export default useUserStore;
