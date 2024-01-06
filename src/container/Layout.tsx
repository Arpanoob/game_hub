import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import NavigationBar from "../View/navigationBar";
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
