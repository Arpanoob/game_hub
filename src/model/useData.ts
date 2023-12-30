import React, { useEffect, useState } from "react";
import api_client from "../servises/api_client";
import { AxiosRequestConfig, CanceledError } from "axios";
export interface FetchGamesResponser<T> {
  count: number;
  results: T[];
}

export interface UseResult<T> {
  data: T[];
  error: string;
  isLoading:boolean;
}

function useData<T>(endpoint:string,requestConfig?:AxiosRequestConfig,dep?:any[]): UseResult<T> {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading,setIsLoading]=useState(false);
  useEffect(() => {
    setData([]);
    const controller = new AbortController();
    setIsLoading(true);

    console.log("games");
    const fetchData = async () => {
      try {
        const response = await api_client.get<FetchGamesResponser<T>>(endpoint, {
          signal: controller.signal,...requestConfig
        });

        setData(response.data.results);

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
  }, dep?dep:[]);

  return {
    data,
    error,
    isLoading,
  };
}

export default useData;
