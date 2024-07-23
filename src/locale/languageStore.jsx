import { create } from "zustand";

export const languageStore = create((set) => ({
    selectedLanguage: localStorage.getItem("selectedLanguage"),
    setSelectedLanguage: (val) => set({selectedLanguage: val})
}))