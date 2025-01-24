import { create } from "zustand";
import { persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Zustand store with persistence
const usePlanStore = create(
  persist(
    (set) => ({
      planName: "defaultPlanName",
      setPlanName: (name: string) => set({ planName: name }),
    }),
    {
      name: "bibleReadingPlan", // AsyncStorage에 저장될 키 이름
      getStorage: () => AsyncStorage, // 저장소 설정
    }
  )
);

export default usePlanStore;
