import FetchGamesResponser from "../../../../enteties/FetchGamesResponser";
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverBaseResult,
} from "@tanstack/react-query";
import { Game } from "../../../../enteties/Game";

export interface UseGamesResult {
  games: InfiniteData<FetchGamesResponser<Game>>;
  error: Error | null;
  isLoading: boolean;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions
  ) => Promise<InfiniteQueryObserverBaseResult<any, Error>>;
}
