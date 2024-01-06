import { GameQuery } from "./GameQuery";

export interface GameQyeryStore {
  gameQuery: GameQuery;
  setGenreId: (gId: number) => void;
  setSortOrder: (s: string) => void;
  setPlatforms: (pId: number) => void;
  setSearchQuery: (sQ?: string) => void;
}
