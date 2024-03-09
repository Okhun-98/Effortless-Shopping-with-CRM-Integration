export interface INavbarProps {
  window?: () => Window;
}

export interface INavLink {
  label: string;
  path: string;
  isLoggedIn: boolean;
}
