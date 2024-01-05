import { useQuery } from "@tanstack/react-query";
import React from "react";
import AxiosClient from "../servises/api_client";

interface useScreenShots {
  id: number;
  image: string;
  width: number;
  height: number;
}
export default function useScreenShots(gameId: number) {
  const ApiClient = new AxiosClient<useScreenShots>(`/games/${gameId}/screenshots`);
  const { data, isLoading,error } = useQuery({
    queryKey: ["useScreenShots", gameId],
    queryFn: () => ApiClient.getAll({}),
  });
  return { data, isLoading,error };
}
