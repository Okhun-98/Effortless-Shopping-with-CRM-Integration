import { Profile } from "../pages/Profile/Profile";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { IRouter } from "../types/router";
import { Users } from "../pages/Users/Users";

export const routerData: IRouter[] = [
  { component: Home, path: "/", isPublish: true },
  { component: Login, path: "/login", isPublish: true },
  { component: Profile, path: "/profile/:id", isPublish: false },
  { component: Users, path: "/admin/users", isPublish: false },
];