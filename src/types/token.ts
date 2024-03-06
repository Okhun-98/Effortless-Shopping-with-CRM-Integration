export interface ITokenState {
  token: string | null;
  setToken: (token: string) => void;
  logOut: () => void;
}
