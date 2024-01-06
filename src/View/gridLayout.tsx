import React from "react";

import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";

import NavigationBar from "./navigationBar";
import GameGrid from "./gameGrid";
import { UseGamesResult } from "../enteties/GamesResult";
import Genre from "../viewModel/Genre";
import Platform from "../viewModel/Platform";
import SortOrder from "./sortOrder";
import GameHeading from "./gameHeading";

function gridLayout({
  error,
  games,
  isLoading,
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage,
}: UseGamesResult) {
  return (
    <div>
      <Grid
        templateAreas={{ lg: `"aside main"`, base: `"main"` }}
        paddingTop="0px"
        templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      >
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <Genre />
          </GridItem>
        </Show>
        <GridItem area="main">
          <div
            style={{
              display: "flex",
              marginLeft: "10px",
              alignSelf: "self-start",
              alignItems: "flex-start",
              flexDirection: "column",

              paddingBottom: "30px",
            }}
          >
            <GameHeading />
            <HStack>
              <Platform />
              <SortOrder />
            </HStack>
          </div>
          <GameGrid
            error={error}
            games={games}
            isLoading={isLoading}
            isFetchingNextPage={isFetchingNextPage}
            hasNextPage={hasNextPage}
            fetchNextPage={fetchNextPage}
          />
        </GridItem>
      </Grid>
    </div>
  );
}

export default gridLayout;
