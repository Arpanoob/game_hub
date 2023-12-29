import React, { useEffect, useState } from "react";
import api_client from "../servises/api_client";
import { CanceledError } from "axios";

export interface Genre {
  id: number;
  name: string;
}

export interface FetchGenreResponser {
  count: number;
  results: Genre[];
}



function useGenre(){
  const [genre, setGenre] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading,setIsLoading]=useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    console.log("games");
    const fetchData = async () => {
      try {
        const response = await api_client.get<FetchGenreResponser>("/genres", {
          signal: controller.signal,
        });

        setGenre(response.data.results);
        console.log(genre);
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
    genre,
    error,
    isLoading,
  };
}

export default useGenre;
