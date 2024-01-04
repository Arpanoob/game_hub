import { create } from "zustand";
import { GameQuery } from "../useGames";

interface GameQyeryStore{
    gameQuery:GameQuery;
    setGenreId:(gId:number)=>void;
    setSortOrder:(s:string)=>void;
    setPlatforms:(pId:number)=>void;
    setSearchQuery:(sQ:string)=>void
}
 const useGameQueryStore =create<GameQyeryStore>(set=>({
   gameQuery:{},
   setGenreId:(gId)=>set((store)=>({gameQuery:{...store.gameQuery,genreId:gId}})),
   setPlatforms:(pId)=>set((store)=>({gameQuery:{...store.gameQuery,platformId:pId}})),
   setSearchQuery:(s)=>set(()=>({gameQuery:{searchQuery:s}})),
   setSortOrder:(s)=>(set((store)=>({gameQuery:{...store.gameQuery,s}}))),
 }))
 export default useGameQueryStore;