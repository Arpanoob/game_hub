import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import ColorMode from "./colorMode";
import SearchBar from "./searchBar";
import { GameQuery } from "../model/useGames";

interface props {
  gameQuery:GameQuery
  setGameQuery:(q:GameQuery)=>void;
  }
  
export default function NavigationBar({gameQuery,setGameQuery}:props) {
  return (
    <HStack padding={"10px"}>
      <Image boxSize="60px" src={logo} />
      <SearchBar gameQuery={gameQuery} setGameQuery={setGameQuery}/>
      <ColorMode />
    </HStack>
  );
}
