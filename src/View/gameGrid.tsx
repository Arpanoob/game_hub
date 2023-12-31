import { Image, SimpleGrid, Text } from "@chakra-ui/react";

import GameCard from "../View/gameCard";
import { UseGamesResult } from "../model/useGames";
import SkeletonCard from "./skeletonCard";
import GameCardContainer from "./gameCardContainer";
import { MdHourglassEmpty, MdOutlineHourglassEmpty } from "react-icons/md";
import { FaBatteryEmpty } from "react-icons/fa";
import empty from "../assets/ONKJBH0.webp";
function GameGrid({ error, games, isLoading }: UseGamesResult) {
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {isLoading && (
        <SimpleGrid
          padding={"10px"}
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={6}
        >
          {Skeletons.map((skl) => (
            <GameCardContainer key={skl}>
              <SkeletonCard />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      )}
      {!isLoading && error && <Text>{error}</Text>}
      {
        <SimpleGrid
          padding={"10px"}
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={6}
        >
          {games.map((x) => (
            <GameCardContainer key={x.id}>
              <GameCard game={x} />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      }
      {!isLoading && !error && games.length === 0 && (
        <div
          style={{
            display: "flex",
            marginTop: "200px",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Image src={empty} width="600px" height="300px" />
        </div>
      )}
    </>
  );
}

export default GameGrid;
