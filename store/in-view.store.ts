import { create } from "zustand";

type TState = {
  sectionName: string | null;
  setSectionName: (sectionName: string | null) => void;
};

export const inViewStore = create<TState>((set, _get) => ({
  sectionName: null,

  setSectionName: (sectionName: string | null) => {
    set((state) => ({
      ...state,
      sectionName,
    }));
  },
}));
