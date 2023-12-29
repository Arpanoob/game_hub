import React from "react";
import { Genre } from "../model/useGenre";
interface props {
  genre: Genre[];
  isLoading: boolean;
  error: string;
}

function genreList({ genre, isLoading, error }: props) {
  return (
    <ul>
      {genre.map((gen) => (
        <li key={gen.id}>{gen.name}</li>
      ))}
    </ul>
  );
}

export default genreList;
