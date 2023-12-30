import React, { useEffect, useState } from "react";
import api_client from "../servises/api_client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenre";
import { plateformm } from "./usePlatform";

interface plate{
  id:number;
  slug:string;
  name:string;
}
export interface platform{
  platform:plate
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms:platform[];
  metacritic:number;
}
 export interface GameQuery{
  genre:Genre|null;
  platform:plateformm|null;
 }
export interface UseGamesResult {
  games: Game[];
  error: string;
  isLoading:boolean;
  gameQuery:GameQuery;
  setGameQuery:(q:GameQuery)=>void;
}

function useGames(): UseGamesResult {
  const [gameQuery,setGameQuery]=useState<GameQuery>({} as GameQuery);
  const {data,isLoading,error}=useData<Game>("/games",
  {params:{genres:gameQuery.genre?.id,parent_platforms:gameQuery.platform?.id}},
  [gameQuery.genre?.id,gameQuery.platform?.id]);

  return {
    games:data,
    error,
    isLoading,
    gameQuery,
    setGameQuery
  };
}

export default useGames;
