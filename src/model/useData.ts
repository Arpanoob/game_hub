import React, { useEffect, useState } from "react";
import api_client from "../servises/api_client";
import { CanceledError } from "axios";
export interface FetchGamesResponser<T> {
  count: number;
  results: T[];
}

export interface UseGamesResult<T> {
  data: T[];
  error: string;
  isLoading:boolean;
}

function useData<T>(endpoint:string): UseGamesResult<T> {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading,setIsLoading]=useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    console.log("games");
    const fetchData = async () => {
      try {
        const response = await api_client.get<FetchGamesResponser<T>>(endpoint, {
          signal: controller.signal,
        });

        setData(response.data.results);
        console.log("data",data)

        console.log(data);
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
    data,
    error,
    isLoading,
  };
}

export default useData;
