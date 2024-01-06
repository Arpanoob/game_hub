import React, { useEffect, useState } from "react";
import AxiosClient from "../servises/api_client";
import { FetchGamesResponser } from "../enteties/FetchGamesResponser";
import { plateformm } from "../enteties/plateformm";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import useGameQueryStore from "./store/store";
import { Game } from "../enteties/Game";

const ApiClient = new AxiosClient<Game>("/games");

function useGames() {
  const { gameQuery } = useGameQueryStore();
  const {
    data,
    isLoading,
    error,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery<FetchGamesResponser<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      ApiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId as number,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchQuery,
          page: pageParam,
        },
      }),
    cacheTime: 60 * 1000, // Adjust cache time as needed
    staleTime: 10 * 60 * 1000, // Set a reasonable stale time
    getNextPageParam: (LastPage, AllPages) => {
      return LastPage.next ? AllPages.length + 1 : undefined;
    },
  });

  return {
    games: data,
    error: error || null,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  };
}

export default useGames;
