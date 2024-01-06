import { Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import NavigationBar from "../View/molecules/navigationBar";

const Error = () => {
  const error = useRouteError();
  return (
    <>
      <NavigationBar />
      <Heading>Oops..</Heading>
      <Text>
        {isRouteErrorResponse(error) ? "invalid page" : "somethig  else occued"}
      </Text>
    </>
  );
};

export default Error;
