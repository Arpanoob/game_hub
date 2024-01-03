import { Heading } from "@chakra-ui/react";
import React from "react";
import useGames, { GameQuery } from "../model/useGames";
import useGenre from "../model/useGenre";
import usePlatform from "../model/usePlatform";
import useGenr from "../model/useGenr";
interface props {
  gameQuery: GameQuery;
}
function gameHeading({ gameQuery }: props) {
  const { platform } = usePlatform(gameQuery.platformId as number);
  const { genre } = useGenr(gameQuery.genreId as number);
  const heading = `${platform?.name || ""} ${genre?.name || ""}  Games`;
  return (
    <Heading as="h1" marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
}

export default gameHeading;
