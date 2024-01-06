import { create } from "zustand";

import { GameQyeryStore } from "../../enteties/GameQyeryStore";

const useGameQueryStore = create<GameQyeryStore>((set) => ({
  gameQuery: {},
  setGenreId: (gId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId: gId } })),
  setPlatforms: (pId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId: pId } })),
  setSortOrder: (s) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder: s } })),
  setSearchQuery: (s) => set(() => ({ gameQuery: { searchQuery: s } })),
}));
export default useGameQueryStore;
