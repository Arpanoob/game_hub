import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../model/useGames";
interface props {
  gameQuery: GameQuery;
}
function gameHeading({ gameQuery }: props) {
  const haeding = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  }  Games`;
  return (
    <Heading as="h1" marginY={5} fontSize={"5xl"}>
      {haeding}
    </Heading>
  );
}

export default gameHeading;
