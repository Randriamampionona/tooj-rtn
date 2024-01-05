import { create } from "zustand";

type TState = {
  isOpen: boolean;
  setIsOpen: (value?: boolean) => void;
};

export const menuStore = create<TState>((set, _get) => ({
  isOpen: false,

  setIsOpen: (value?: boolean) => {
    set((state) => ({
      ...state,
      isOpen: value ?? !state.isOpen,
    }));
  },
}));
