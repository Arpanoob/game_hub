import React from "react";

import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";

import NavigationBar from "./navigationBar";
import GameGrid from "./gameGrid";
import { UseGamesResult } from "../model/useGames";
import Genre from "../viewModel/Genre";
import Platform from "../viewModel/Platform";
import SortOrder from "./sortOrder";

function gridLayout({
  error,
  games,
  isLoading,
  gameQuery,
  setGameQuery,
}: UseGamesResult) {
  return (
    <div>
      <Grid
        templateAreas={{ lg: `"nav nav" "aside main"`, base: `"nav" "main"` }}
        paddingTop="0px"
        templateColumns={{ base: "1fr", lg: "260px 1fr" }}
      >
        <GridItem area="nav">
          <NavigationBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <Genre gameQuery={gameQuery} setGameQuery={setGameQuery} />
          </GridItem>
        </Show>
        <GridItem area="main">
          <div
            style={{
              display: "flex",
              marginLeft: "10px",
              alignSelf: "self-start",
            }}
          >
            <HStack>
              <Platform gameQuery={gameQuery} setGameQuery={setGameQuery} />
              <SortOrder gameQuery={gameQuery} setGameQuery={setGameQuery} />
            </HStack>
          </div>
          <GameGrid
            error={error}
            games={games}
            isLoading={isLoading}
            gameQuery={gameQuery}
            setGameQuery={setGameQuery}
          />
        </GridItem>
      </Grid>
    </div>
  );
}

export default gridLayout;
