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
 
export interface UseGamesResult {
  games: Game[];
  error: string;
  isLoading:boolean;
  selectedGenre:Genre | null;
  setSelectedGenre:(genre:Genre)=>void;
  setSelectedPlatform:(p:plateformm)=>void;
}

function useGames(): UseGamesResult {
  const [selectedPlatform,setSelectedPlatform]=useState<plateformm|null>(null);
  const [selectedGenre,setSelectedGenre]=useState<Genre|null>(null);
  console.log("platfrom",selectedPlatform);
  const {data,isLoading,error}=useData<Game>("/games",{params:{genres:selectedGenre?.id,parent_platforms:selectedPlatform?.id}},[selectedGenre?.id,selectedPlatform?.id]);

  return {
    games:data,
    error,
    isLoading,
    selectedGenre,
    setSelectedGenre,
    setSelectedPlatform
  };
}

export default useGames;
