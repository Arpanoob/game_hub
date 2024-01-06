import React, { useEffect, useState } from "react";
import { axiosInstance } from "../servises/api_client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { FetchGamesResponser } from "../enteties/FetchGamesResponser";
export interface UseResult<T> {
  data: T[];
  error: string;
  isLoading: boolean;
}

function useData<T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  dep?: any[]
): UseResult<T> {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(
    () => {
      setData([]);
      const controller = new AbortController();
      setIsLoading(true);
      const fetchData = async () => {
        try {
          const response = await axiosInstance.get<FetchGamesResponser<T>>(
            endpoint,
            {
              signal: controller.signal,
              ...requestConfig,
            }
          );

          setData(response.data.results);

          setIsLoading(false);
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
    },
    dep ? dep : []
  );

  return {
    data,
    error,
    isLoading,
  };
}

export default useData;
