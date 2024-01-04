import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverBaseResult,
} from "@tanstack/react-query";
import GridLayout from "../View/gridLayout";
import useGrid, { Game } from "../model/useGames";
import { FetchGamesResponser } from "../model/useData";
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
