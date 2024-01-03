import React from "react";

import usePlatform, { plateformm } from "../model/usePlatform";
import Platform from "../View/platform";
import { GameQuery } from "../model/useGames";
import { FetchGamesResponser } from "../model/useData";
interface props {
  setGameQuery: (p: GameQuery) => void;
  gameQuery: GameQuery;
}
function platform({ setGameQuery, gameQuery }: props) {
  const { data, error, isLoading } = usePlatform();
  return (
    <Platform
      gameQuery={gameQuery}
      plateforms={data as FetchGamesResponser<plateformm> }
      error={error as Error}
      setGameQuery={setGameQuery}
    />
  );
}

export default platform;
