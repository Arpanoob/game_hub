import React from "react";
import useGenre, { Genre } from "../model/useGenre";
import GenreList from "../View/genreList";
import { GameQuery } from "../model/useGames";
import { FetchGamesResponser } from "../model/useData";

function Genree() {
  const { data, isLoading, error  } = useGenre();
  return (
    <GenreList
      genre={data as FetchGamesResponser<Genre>}
      isLoading={isLoading}
      error={error }
    />
  );
}

export default Genree;
