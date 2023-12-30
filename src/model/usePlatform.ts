import React from 'react'
import useData from './useData';

export interface plateformm{
    id:number;
    name:string;
    slug:string;
}


function usePlatform() {
    const{data,error,isLoading}=useData<plateformm>('/platforms/lists/parents');
  return {
    plateforms:data,
    error,
    isLoading
  }
}

export default usePlatform
