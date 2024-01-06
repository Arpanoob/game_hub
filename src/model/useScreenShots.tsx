import { useQuery } from "@tanstack/react-query";

import AxiosClient from "../servises/api_client";
import { useScreenShots } from "../enteties/useScreenShots.1";

export default function useScreenShots(gameId: number) {
  const ApiClient = new AxiosClient<useScreenShots>(
    `/games/${gameId}/screenshots`
  );
  const { data, isLoading, error } = useQuery({
    queryKey: ["useScreenShots", gameId],
    queryFn: () => ApiClient.getAll({}),
  });
  return { data, isLoading, error };
}
