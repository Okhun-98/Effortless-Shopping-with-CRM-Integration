import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { IRouter } from "../types/router";
import { Users } from "../pages/Users/Users";
import { Profile } from "../pages/Profile/Profile";

export const routerData: IRouter[] = [
  { component: Home, path: "/", isAuth: false },
  { component: Login, path: "/login", isAuth: false },
  { component: Users, path: "/admin/users", isAuth: true },
  { component: Profile, path: "/profile", isAuth: true },
];
