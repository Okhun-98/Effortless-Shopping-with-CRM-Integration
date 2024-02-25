import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { IRouter } from "../types/router";
import { Users } from "../pages/Users/Users";
import { Profile } from "../pages/Profile/Profile";

export const routerData: IRouter[] = [
  { component: Home, path: "/", isPublish: true },
  { component: Login, path: "/login", isPublish: true },
  { component: Users, path: "/admin/users", isPublish: false },
  { component: Profile, path: "/profile", isPublish: false },
];
