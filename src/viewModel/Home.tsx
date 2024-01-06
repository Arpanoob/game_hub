import { InfiniteData } from "@tanstack/react-query";
import GridLayout from "../View/pages/GameListing";
import useGrid from "../model/useGames";
import { Game } from "../enteties/Game";
import FetchGamesResponser from "../enteties/FetchGamesResponser";
function Home() {
  const {
    error,
    games,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useGrid();
  return (
    <GridLayout
      error={error}
      games={games as InfiniteData<FetchGamesResponser<Game>>}
      isLoading={isLoading}
      isFetchingNextPage={isFetchingNextPage}
      hasNextPage={hasNextPage as boolean}
      fetchNextPage={fetchNextPage}
    />
  );
}

export default Home;
