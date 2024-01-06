import { Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

import { Box } from "@chakra-ui/react";
interface props {
  tilte: string;
  children: ReactNode | ReactNode[];
}
const DefinationItems = ({ tilte, children }: props) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize={"md"} color={"gray.600"}>
        {tilte}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinationItems;
