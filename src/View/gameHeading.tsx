import { Heading } from "@chakra-ui/react";
import React from "react";
import useGames, { GameQuery } from "../model/useGames";
import useGenre from "../model/useGenre";
import usePlatform from "../model/usePlatform";
interface props {
  gameQuery: GameQuery;
}
function gameHeading({ gameQuery }: props) {
  const { data:platforms } = usePlatform();
  const { data:genres } = useGenre();
  const platform=platforms?.results.find((p)=> p.id=== gameQuery.platformId)
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const haeding = `${platform?.name || ""} ${
    genre?.name || ""
  }  Games`;
  return (
    <Heading as="h1" marginY={5} fontSize={"5xl"}>
      {haeding}
    </Heading>
  );
}

export default gameHeading;
