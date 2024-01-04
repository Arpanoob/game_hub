import React, { useEffect, useState } from "react";
import AxiosClient from "../servises/api_client";
import { FetchGamesResponser } from "./useData";
import { Genre } from "./useGenre";
import { plateformm } from "./usePlatforms";
import { FetchNextPageOptions, InfiniteData, InfiniteQueryObserverBaseResult, useInfiniteQuery, useQuery } from "@tanstack/react-query";
import useGameQueryStore from "./store/store";

interface plate {
  id: number;
  slug: string;
  name: string;
}

export interface platform {
  platform: plate;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: platform[];
  metacritic: number;
  rating_top: number;
}

export interface GameQuery {
  genreId?:number;
  platformId?: number;
  sortOrder?: string ;
  searchQuery?: string ;
}

export interface UseGamesResult {
  games: InfiniteData<FetchGamesResponser<Game>>;
  error: Error | null;
  isLoading: boolean;
  isFetchingNextPage:boolean;
  hasNextPage:boolean,
  fetchNextPage: (options?: FetchNextPageOptions) => Promise<InfiniteQueryObserverBaseResult<any, Error>>;
}

const ApiClient = new AxiosClient<Game>("/games");

function useGames(){
   const {gameQuery}= useGameQueryStore()
  const { data, isLoading, error,isFetchingNextPage,hasNextPage,fetchNextPage } =
   useInfiniteQuery<FetchGamesResponser<Game>,Error>({
    queryKey:['games',gameQuery],
    queryFn:({pageParam=1})=>ApiClient.getAll( {params:{genres:gameQuery.genreId,
                parent_platforms:gameQuery.platformId as number,
                ordering:gameQuery.sortOrder,
                search:gameQuery.searchQuery,
                page:pageParam}}),
    cacheTime: 60 * 1000, // Adjust cache time as needed
    staleTime: 10 * 60 * 1000, // Set a reasonable stale time
      getNextPageParam:(LastPage,AllPages)=>{console.log(LastPage,"asdfghjkl",AllPages); return LastPage.next?AllPages.length+1:undefined; }
  })

  return {
    games: data,
    error: error || null,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage
  };
}

export default useGames;
