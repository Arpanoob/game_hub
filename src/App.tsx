import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavigationBar from "./View/navigationBar";
import GameGrid from "./View/gameGrid";
import Home from "./viewModel/Home";

function App() {
  return (
    <Home/>
  );
}

export default App;
