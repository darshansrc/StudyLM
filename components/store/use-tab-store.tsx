import { create } from "zustand";
import { persist } from "zustand/middleware";

type TabStore = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export const useTabStore = create<TabStore>()(
  persist(
    (set) => ({
      activeTab: "chat",
      setActiveTab: (tab: string) => set({ activeTab: tab }),
    }),
    {
      name: "tab-storage",
    }
  )
);
