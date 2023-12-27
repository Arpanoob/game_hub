import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavigationBar from "./View/navigationBar";

function App() {
  return (
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
      <GridItem area="main">main</GridItem>
    </Grid>
  );
}

export default App;
