import { BrowserRouter } from "react-router-dom";
import { Router } from "../src/Router/Router";
import DrawerAppBar from "./component/navbar/Navbar";
const App: React.FC = () => {
  const navItems = [
    { label: "Home", url: "/" },
    { label: "Login", url: "/login" },
    { label: "Profile", url: "/profile" },
    { label: "Users", url: "/users" },
  ];
  return (
    <BrowserRouter>
      <DrawerAppBar title={"ShopIn"} links={navItems} />
      <Router />
    </BrowserRouter>
  );
};

export default App;
