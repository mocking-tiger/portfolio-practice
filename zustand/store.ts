import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LanguageState {
  language: string;
  setLanguage: (language: string) => void;
}

export const useLanguageStore = create(
  persist<LanguageState>(
    (set) => ({
      language: "korean",
      setLanguage: (language: string) => {
        set(() => ({ language }));
      },
    }),
    { name: "language" }
  )
);
