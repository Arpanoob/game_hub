import GridLayout from "../View/gridLayout";
import useGrid from "../model/useGames";
function Home() {
  const { error, games, isLoading } = useGrid();
  return <GridLayout error={error} games={games} isLoading={isLoading} />;
}

export default Home;
