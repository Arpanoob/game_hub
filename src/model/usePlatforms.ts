import { FetchGamesResponser } from './useData';
import { useQuery } from '@tanstack/react-query';
import AxiosClient from '../servises/api_client';

export interface plateformm{
    id:number;
    name:string;
    slug:string;
}
const ApiClient = new AxiosClient<plateformm>("/platforms");


function usePlatforms() {
  return useQuery<FetchGamesResponser<plateformm>,Error>({
    queryKey:['plateforms'],
    queryFn:()=>ApiClient.getAll({}),
    cacheTime: 60 * 1000, // Adjust cache time as needed
    staleTime: 10 * 60 * 1000, // Set a reasonable stale time
  })
   

}

export default usePlatforms
