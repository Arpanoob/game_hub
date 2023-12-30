import React from "react";

import { Grid, GridItem, Show } from "@chakra-ui/react";

import NavigationBar from "./navigationBar";
import GameGrid from "./gameGrid";
import { UseGamesResult } from "../model/useGames";
import Genre from "../viewModel/Genre";
import Platform from "../viewModel/Platform";

function gridLayout({
  error,
  games,
  isLoading,
  selectedGenre,
  setSelectedGenre,
}: UseGamesResult) {
  return (
    <div>
      <Grid
        templateAreas={{ lg: `"nav nav" "aside main"`, base: `"nav" "main"` }}
        paddingTop="0px"
        templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      >
        <GridItem area="nav">
          <NavigationBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <Genre
              setSelectedGenre={setSelectedGenre}
              selectedGenre={selectedGenre}
            />
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
            <Platform />
          </div>
          <GameGrid
            error={error}
            games={games}
            isLoading={isLoading}
            setSelectedGenre={setSelectedGenre}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Grid>
    </div>
  );
}

export default gridLayout;
