import React, { useEffect, useState } from "react";
import api_client from "../servises/api_client";
import { CanceledError } from "axios";

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

export interface FetchGamesResponser {
  count: number;
  results: Game[];
}

export interface UseGamesResult {
  games: Game[];
  error: string;
  isLoading:boolean;
}

function useGames(): UseGamesResult {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading,setIsLoading]=useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    console.log("games");
    const fetchData = async () => {
      try {
        const response = await api_client.get<FetchGamesResponser>("/games", {
          signal: controller.signal,
        });

        setGames(response.data.results);
        console.log(games);
        setIsLoading(false)

      } catch (err) {
        if (err instanceof CanceledError) {
          // Request was canceled, do nothing
          return;
        } else {
          setError((err as Error).message);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort(); // Abort the request on component unmount
    };
  }, []);

  return {
    games,
    error,
    isLoading,
  };
}

export default useGames;
