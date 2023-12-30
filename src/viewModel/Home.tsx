import GridLayout from "../View/gridLayout";
import useGrid from "../model/useGames";
function Home() {
  const {
    error,
    games,
    isLoading,
    selectedGenre,
    setSelectedGenre,
    setSelectedPlatform,
  } = useGrid();
  return (
    <GridLayout
      error={error}
      games={games}
      isLoading={isLoading}
      setSelectedGenre={setSelectedGenre}
      selectedGenre={selectedGenre}
      setSelectedPlatform={setSelectedPlatform}
    />
  );
}

export default Home;
