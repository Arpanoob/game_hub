import FetchGamesResponser from "../enteties/FetchGamesResponser";
import { useQuery } from "@tanstack/react-query";
import { plateformm } from "../enteties/plateformm";
import platform from "../api/platform";

function usePlatforms() {
  return useQuery<FetchGamesResponser<plateformm>, Error>({
    queryKey: ["plateforms"],
    queryFn: () => platform().ApiClient.getAll({}),
    cacheTime: 60 * 1000, // Adjust cache time as needed
    staleTime: 10 * 60 * 1000, // Set a reasonable stale time
  });
}

export default usePlatforms;
