import React from 'react'
import useData from './useData';

export interface plateform{
    id:number;
    name:string;
    slug:string;
}


function usePlatform() {
    const{data,error,isLoading}=useData<plateform>('/platforms/lists/parents');
  return {
    plateforms:data,
    error,
    isLoading
  }
}

export default usePlatform
