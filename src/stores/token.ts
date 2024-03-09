import { create } from "zustand";
import { ITokenState } from "../types/token";

export const useTokenStore = create<ITokenState>((set) => ({
  token: null,
  setToken: (token: string) =>
    set(() => {
      localStorage.setItem("TOKEN", token);

      return { token: token };
    }),
  logOut: () =>
    set(() => {
      localStorage.removeItem("TOKEN");
      return { token: null };
    }),
}));
