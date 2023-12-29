import useData from './useData'

export interface Genre {
  id: number;
  name: string;
}

export interface FetchGenreResponser {
  count: number;
  results: Genre[];
}

function useGenre(){
  const {data,error,isLoading}=useData<Genre>("/genres");
  return {
    genre:data,
    error,
    isLoading,
  };
}

export default useGenre;
