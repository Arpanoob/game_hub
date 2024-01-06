import useGenre from "../model/useGenre";
import { Genre } from "../enteties/Genre";
import GenreList from "../View/genreList";
import { FetchGamesResponser } from "../enteties/FetchGamesResponser";

function Genree() {
  const { data, isLoading, error } = useGenre();
  return (
    <GenreList
      genre={data as FetchGamesResponser<Genre>}
      isLoading={isLoading}
      error={error}
    />
  );
}

export default Genree;
