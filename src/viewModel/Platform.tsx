import React from "react";

import usePlatform, { plateformm } from "../model/usePlatform";
import Platform from "../View/platform";
import { GameQuery } from "../model/useGames";
interface props{
  setGameQuery:(p:GameQuery)=>void;
  gameQuery:GameQuery;
}
function platform({ setGameQuery,gameQuery }: props) {
  const { plateforms, error, isLoading } = usePlatform();
  return <Platform gameQuery={gameQuery} plateforms={plateforms} error={error} setGameQuery={setGameQuery}/>;
}

export default platform;
