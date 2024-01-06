import { create } from "zustand";
import { GameQyeryStore } from "../../enteties/GameQyeryStore";

const useGameQueryStore = create<GameQyeryStore>((set) => ({
  gameQuery: {},
  setGenreId: (gId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId: gId } })),
  setPlatforms: (pId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId: pId } })),
  setSearchQuery: (s) => set(() => ({ gameQuery: { searchQuery: s } })),
  setSortOrder: (s) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder: s } })),
}));
export default useGameQueryStore;
