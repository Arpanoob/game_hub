import { SimpleGrid, Text } from "@chakra-ui/react";

import GameCard from "../View/gameCard";
import { UseGamesResult } from "../model/useGames";
import SkeletonCard from "./skeletonCard";
function GameGrid({ error, games, isLoading }: UseGamesResult) {
  const Skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {isLoading && (
        <SimpleGrid
          padding={"10px"}
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={10}
        >
          {Skeletons.map((skl) => (
            <SkeletonCard key={skl} />
          ))}
        </SimpleGrid>
      )}
      {error && <Text>{error}</Text>}
      {
        <SimpleGrid
          padding={"10px"}
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={10}
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
