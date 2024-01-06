import { Heading } from "@chakra-ui/react";
import React from "react";
import useGames from "../model/useGames";
import { GameQuery } from "../enteties/GameQuery";
import useGenre from "../model/useGenre";
import usePlatform from "../model/usePlatform";
import useGenr from "../model/useGenr";
import useGameQueryStore from "../model/store/store";

function gameHeading() {
  const { gameQuery } = useGameQueryStore();

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
