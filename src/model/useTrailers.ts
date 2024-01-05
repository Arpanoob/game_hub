import { useQuery } from "@tanstack/react-query";
import React from "react";
import AxiosClient from "../servises/api_client";

interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}
export default function useTrailers(gameId: number) {
  const ApiClient = new AxiosClient<Trailer>(`/games/${gameId}/movies`);
  const { data, isLoading } = useQuery({
    queryKey: ["trailers", gameId],
    queryFn: () => ApiClient.getAll({}),
  });
  return { data, isLoading };
}
