import React from "react";

import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";

import InfiniteScroll from "react-infinite-scroll-component";

import GameCard from "./gameCard";
import { UseGamesResult } from "./GamesResult";
import SkeletonCard from "./skeletonCard";
import GameCardContainer from "./gameCardContainer";
import empty from "../../../../assets/empty.webp";

function GameGrid({
  error,
  games,
  isLoading,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: UseGamesResult) {
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const fetchedsoFar = games?.pages.reduce(
    (total, page) => total + page?.results?.length,
    0
  );
  // console.log("as", games.pages, !games.pages.res);
  return (
    <Box padding={"10px"} >
      <InfiniteScroll
        dataLength={fetchedsoFar || 0} //it takle total number of card so far
        hasMore={hasNextPage} //IT TAKE BOOLEAN VALUE WITCH TELL TERE BARE MORE OR NOT
        next={() => fetchNextPage()} // IF THERE IS MORE THEN IT FETCHES
        loader={
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
            {Skeletons.map((skl) => (
              <GameCardContainer key={skl}>
                <SkeletonCard />
              </GameCardContainer>
            ))}
          </SimpleGrid>
        }
      >
        {isLoading && (
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
            {Skeletons.map((skl) => (
              <GameCardContainer key={skl}>
                <SkeletonCard />
              </GameCardContainer>
            ))}
          </SimpleGrid>
        )}
        {!isLoading && error && <Text>{error.message}</Text>}
        {
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
            {games?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page?.results.map((x) => (
                  <GameCardContainer key={x.id}>
                    <GameCard game={x} />
                  </GameCardContainer>
                ))}
              </React.Fragment>
            ))}
          </SimpleGrid>
        }
      </InfiniteScroll>

      {!isLoading && !!!fetchedsoFar && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            justifyItems: "center",
          }}
        >
          <Image src={empty} alignSelf="center" width="400px" height="300px" />
        </div>
      )}
    </Box>
  );
}

export default GameGrid;
