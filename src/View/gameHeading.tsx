import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../model/useGames";
import useGenre from "../model/useGenre";
interface props {
  gameQuery: GameQuery;
}
function gameHeading({ gameQuery }: props) {
  const { data } = useGenre();
  const genre = data?.results.find((g) => g.id === gameQuery.genreId);
  const haeding = `${gameQuery.platform?.name || ""} ${
    genre?.name || ""
  }  Games`;
  return (
    <Heading as="h1" marginY={5} fontSize={"5xl"}>
      {haeding}
    </Heading>
  );
}

export default gameHeading;
