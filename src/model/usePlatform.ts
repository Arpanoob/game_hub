import React from 'react'
import useData, { FetchGamesResponser } from './useData';
import { QueryKey, useQuery } from '@tanstack/react-query';
import AxiosClient, {axiosInstance} from '../servises/api_client';

export interface plateformm{
    id:number;
    name:string;
    slug:string;
}
const platformsQueryKey: QueryKey = ['platforms'];
const ApiClient = new AxiosClient<plateformm>("/platforms");


function usePlatform() {
  return useQuery<FetchGamesResponser<plateformm>,Error>({
    queryKey:['plateforms'],
    queryFn:()=>ApiClient.getAll({}),
    cacheTime: 60 * 1000, // Adjust cache time as needed
    staleTime: 10 * 60 * 1000, // Set a reasonable stale time
  })
   

}

export default usePlatform
