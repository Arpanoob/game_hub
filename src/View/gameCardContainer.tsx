import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface props {
  children: ReactNode;
}

function gameCardContainer({ children }: props) {
  return (
    <Box
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
      borderRadius={10}
      overflow={"hidden"}
      margin={2}
    >
      {children}
    </Box>
  );
}

export default gameCardContainer;
