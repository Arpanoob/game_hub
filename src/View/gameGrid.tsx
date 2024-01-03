import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";

import GameCard from "../View/gameCard";
import { UseGamesResult } from "../model/useGames";
import SkeletonCard from "./skeletonCard";
import GameCardContainer from "./gameCardContainer";
import { MdHourglassEmpty, MdOutlineHourglassEmpty } from "react-icons/md";
import { FaBatteryEmpty } from "react-icons/fa";
import empty from "../assets/ONKJBH0.webp";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
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
  console.log("fetchedsoFar", fetchedsoFar);
  return (
    <Box padding={"10px"}>
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

            {!isLoading && !error && games?.pages?.length === 0 && (
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
          </SimpleGrid>
        }
        {hasNextPage && (
          <Button onClick={() => fetchNextPage()}>
            {isFetchingNextPage ? "Loading" : "Load More"}
          </Button>
        )}
      </InfiniteScroll>
    </Box>
  );
}

export default GameGrid;
