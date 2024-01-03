import { useQuery } from '@tanstack/react-query';
import AxiosClient from '../servises/api_client';
import { FetchGamesResponser } from './useData';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const ApiClient = new AxiosClient<Genre>("/genres");

function useGenre() {
  return useQuery<FetchGamesResponser<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: () => ApiClient.getAll({}), // Assuming no additional configuration needed
    cacheTime: 60 * 1000, // Adjust cache time as needed
    staleTime: 10 * 60 * 1000, // Set a reasonable stale time
  });
}

export default useGenre;
