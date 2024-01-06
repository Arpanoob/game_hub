import { useQuery } from "@tanstack/react-query";
import screenshots from "../api/screenshots";

export default function useScreenShots(gameId: number) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["useScreenShots", gameId],
    queryFn: () => screenshots(gameId).ApiClient.getAll({}),
  });
  return { data, isLoading, error };
}
