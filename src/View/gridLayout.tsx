import React from "react";

import { Grid, GridItem, Show } from "@chakra-ui/react";

import NavigationBar from "./navigationBar";
import GameGrid from "./gameGrid";

interface Game {
  id: number;
  name: string;
}
interface results {
  error: string;
  games: Game[];
}

function gridLayout({ error, games }: results) {
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
          <GameGrid error={error} games={games} />
        </GridItem>
      </Grid>
    </div>
  );
}

export default gridLayout;
