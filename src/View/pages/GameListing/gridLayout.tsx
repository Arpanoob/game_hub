import React from "react";

import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";

import GameGrid from "./components/gameGrid";
import { UseGamesResult } from "./components/GamesResult";
import Genre from "../../../viewModel/Genre";
import Platform from "../../../viewModel/Platform";
import SortOrder from "./components/sortOrder";
import GameHeading from "./components/gameHeading";

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
      <Grid overflow={'hidden'}
        templateAreas={{ lg: `"aside main"`, base: `"main"` }}
        paddingTop="45px"
        templateColumns={{ base: "1fr", lg: "250px 1fr" }}
      >
        <Show above="lg">
          <GridItem position={'fixed'} zIndex={1000} scrollBehavior={"smooth"} area="aside" >
            <Genre />
          </GridItem>
        </Show>
        <GridItem  area="main"   >
          <div
            style={{
              display: "flex",
              marginLeft: "20px",
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
