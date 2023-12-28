import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "../View/gameCard";
import { UseGamesResult } from "../model/useGames";

function GameGrid({ error, games }: UseGamesResult) {
  return (
    <>
      {error && <Text>{error}</Text>}
      {
        <SimpleGrid
          padding={"10px"}
          columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
          spacing="10px"
        >
          {games.map((x) => (
            <GameCard key={x.id} game={x} />
          ))}
        </SimpleGrid>
      }
    </>
  );
}

export default GameGrid;
