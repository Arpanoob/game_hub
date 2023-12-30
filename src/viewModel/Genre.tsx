import React from "react";
import useGenre, { Genre } from "../model/useGenre";
import GenreList from "../View/genreList";
import { GameQuery } from "../model/useGames";

interface props {
gameQuery:GameQuery
setGameQuery:(q:GameQuery)=>void;
}

function Genree({gameQuery,setGameQuery}: props) {
  const { genre, isLoading, error } = useGenre();
  return (
    <GenreList
      genre={genre}
      isLoading={isLoading}
      error={error}
      gameQuery={gameQuery}
      setGameQuery={setGameQuery}
    />
  );
}

export default Genree;
