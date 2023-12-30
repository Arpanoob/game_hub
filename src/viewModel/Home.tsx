import GridLayout from "../View/gridLayout";
import useGrid from "../model/useGames";
function Home() {
  const { error, games, isLoading, selectedGenre, setSelectedGenre } =
    useGrid();
  return (
    <GridLayout
      error={error}
      games={games}
      isLoading={isLoading}
      setSelectedGenre={setSelectedGenre}
      selectedGenre={selectedGenre}
    />
  );
}

export default Home;
