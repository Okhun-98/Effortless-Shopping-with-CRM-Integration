import { INavLink } from "../../types/navbar";

export const navLinks: INavLink[] = [
  { label: "Home", path: "/home", isLoggedIn: false },
  { label: "Profile", path: "/profile", isLoggedIn: true },
  { label: "Users", path: "/admin/users", isLoggedIn: true },
  { label: "Login", path: "/login", isLoggedIn: false },
];
