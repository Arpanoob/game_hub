import { Outlet } from "react-router-dom";
import NavigationBar from "../View/navigationBar";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
