import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface props {
  children: ReactNode;
}

function gameCardContainer({ children }: props) {
  return (
    <Box borderRadius={10} width="300px" overflow={"hidden"}>
      {children}
    </Box>
  );
}

export default gameCardContainer;
