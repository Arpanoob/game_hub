import { useQuery } from "@tanstack/react-query";
import React from "react";
import AxiosClient from "../servises/api_client";
import { Trailer } from "../enteties/Trailer";

export default function useTrailers(gameId: number) {
  const ApiClient = new AxiosClient<Trailer>(`/games/${gameId}/movies`);
  const { data, isLoading } = useQuery({
    queryKey: ["trailers", gameId],
    queryFn: () => ApiClient.getAll({}),
  });
  return { data, isLoading };
}
