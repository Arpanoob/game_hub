import React from "react";

import { Grid, GridItem, Show } from "@chakra-ui/react";

import NavigationBar from "./navigationBar";
import GameGrid from "./gameGrid";
import { UseGamesResult } from "../model/useGames";

function gridLayout({ error, games,isLoading }: UseGamesResult) {
  return (
    <div>
      <Grid
        templateAreas={{ lg: `"nav nav" "aside main"`, base: `"nav" "main"` }}
        paddingTop="0px"
      >
        <GridItem area="nav">
          <NavigationBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">aside</GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid error={error} games={games} isLoading={isLoading} />
        </GridItem>
      </Grid>
    </div>
  );
}

export default gridLayout;
