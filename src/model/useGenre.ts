import { useQuery } from "@tanstack/react-query";
import FetchGamesResponser from "../enteties/FetchGamesResponser";
import { Genre } from "../enteties/Genre";
import genres from "../api/genres";

function useGenre() {
  return useQuery<FetchGamesResponser<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: () => genres().ApiClient.getAll({}), // Assuming no additional configuration needed
    cacheTime: 60 * 1000, // Adjust cache time as needed
    staleTime: 10 * 60 * 1000, // Set a reasonable stale time
  });
}

export default useGenre;
