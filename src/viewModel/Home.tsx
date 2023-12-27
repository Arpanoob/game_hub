import GridLayout from "../View/gridLayout";
import useGrid from "../model/useGames";
function Home() {
  const { error, games } = useGrid();
  return <GridLayout error={error} games={games} />;
}

export default Home;
