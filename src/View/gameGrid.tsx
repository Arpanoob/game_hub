import React, { useEffect, useState } from "react";
import api_client from "../servises/api_client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponser {
  count: number;
  results: Game[];
}
interface results {
  error: string;
  games: Game[];
}

function GameGrid({ error, games }: results) {
  return (
    <>
      {error && <Text>{error}</Text>}
      {
        <ul>
          {games.map((x) => (
            <li key={x.id}>{x.name}</li>
          ))}
        </ul>
      }
    </>
  );
}

export default GameGrid;
