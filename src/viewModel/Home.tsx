import GridLayout from "../View/gridLayout";
import useGrid from "../model/useGames";
function Home() {
  const {
    error,
    games,
    isLoading,
    gameQuery,
    setGameQuery
  } = useGrid();
  return (
    <GridLayout
      error={error}
      games={games}
      isLoading={isLoading}
      gameQuery={gameQuery}
      setGameQuery={setGameQuery}
    />
  );
}

export default Home;
