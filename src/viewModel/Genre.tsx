import React from "react";
import useGenre, { Genre } from "../model/useGenre";
import GenreList from "../View/genreList";
import { GameQuery } from "../model/useGames";
import { FetchGamesResponser } from "../model/useData";

interface props {
gameQuery:GameQuery
setGameQuery:(q:GameQuery)=>void;
}

function Genree({gameQuery,setGameQuery}: props) {
  const { data, isLoading, error  } = useGenre();
  return (
    <GenreList
      genre={data as FetchGamesResponser<Genre>}
      isLoading={isLoading}
      error={error }
      gameQuery={gameQuery}
      setGameQuery={setGameQuery}
    />
  );
}

export default Genree;
