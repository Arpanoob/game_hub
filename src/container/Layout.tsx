import { Outlet } from "react-router-dom";
import NavigationBar from "../View/navigationBar";

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
};

export default Layout;
