import { SimpleGrid, Text } from "@chakra-ui/react";

import GameCard from "../View/gameCard";
import { UseGamesResult } from "../model/useGames";
import SkeletonCard from "./skeletonCard";
import GameCardContainer from "./gameCardContainer";
function GameGrid({ error, games, isLoading }: UseGamesResult) {
  const Skeletons = [1, 2, 3, 4, 5, 6,7,8,9,10];
  return (
    <>
      {isLoading && (
        <SimpleGrid
          padding={"10px"}
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={3}
        >
          {Skeletons.map((skl) => (
            <GameCardContainer>
              <SkeletonCard key={skl} />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      )}
      {error && <Text>{error}</Text>}
      {
        <SimpleGrid
          padding={"10px"}
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={3}
        >
          {games.map((x) => (
            <GameCardContainer>
              <GameCard key={x.id} game={x} />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      }
    </>
  );
}

export default GameGrid;
