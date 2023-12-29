import React, { useEffect, useState } from "react";
import api_client from "../servises/api_client";
import { CanceledError } from "axios";
import useData from "./useData";

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
}

function useGames(): UseGamesResult {
  const {data,isLoading,error}=useData<Game>("/games");

  return {
    games:data,
    error,
    isLoading,
  };
}

export default useGames;
