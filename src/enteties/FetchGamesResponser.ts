export default interface FetchGamesResponser<T> {
  count: number;
  next: string | null;
  results: T[];
}
