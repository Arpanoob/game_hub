import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import NavigationBar from "../View/molecules/navigationBar";
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
