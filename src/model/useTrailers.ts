import { useQuery } from "@tanstack/react-query";
import trailer from "../api/trailer";

export default function useTrailers(gameId: number) {
  const { data, isLoading } = useQuery({
    queryKey: ["trailers", gameId],
    queryFn: () => trailer(gameId).ApiClient.getAll({}),
  });
  return { data, isLoading };
}
