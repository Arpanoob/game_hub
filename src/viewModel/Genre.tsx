import useGenre from "../model/useGenre";
import { Genre } from "../enteties/Genre";
import GenreList from "../View/pages/GameListing/components/genreList";
import FetchGamesResponser from "../enteties/FetchGamesResponser";
import { Box } from "@chakra-ui/react";

function Genree() {
  const { data, isLoading, error } = useGenre();
  return (
    <Box>
      <GenreList
        genre={data as FetchGamesResponser<Genre>}
        isLoading={isLoading}
        error={error}
      />
    </Box>
  );
}

export default Genree;
