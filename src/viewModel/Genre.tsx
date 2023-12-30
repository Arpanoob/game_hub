import React from "react";
import useGenre, { Genre } from "../model/useGenre";
import GenreList from "../View/genreList";

interface props {
  selectedGenre: Genre | null;
  setSelectedGenre: (genre: Genre) => void;
}

function Genree({ setSelectedGenre, selectedGenre }: props) {
  const { genre, isLoading, error } = useGenre();
  return (
    <GenreList
      genre={genre}
      isLoading={isLoading}
      error={error}
      setSelectedGenre={setSelectedGenre}
      selectedGenre={selectedGenre}
    />
  );
}

export default Genree;
