import { create } from "zustand";

type TState = {
  isOpen: boolean;
  setIsOpen: () => void;
};

export const menuStore = create<TState>((set, _get) => ({
  isOpen: false,

  setIsOpen: () => {
    set((state) => ({
      ...state,
      isOpen: !state.isOpen,
    }));
  },
}));
