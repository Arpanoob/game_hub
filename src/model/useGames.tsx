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
}

interface FetchGamesResponser {
  count: number;
  results: Game[];
}

export interface UseGamesResult {
  games: Game[];
  error: string;
}

function useGames(): UseGamesResult {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    console.log("games");
    const fetchData = async () => {
      try {
        const response = await api_client.get<FetchGamesResponser>("/games", {
          signal: controller.signal,
        });

        setGames(response.data.results);
        console.log(games);
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
  };
}

export default useGames;
