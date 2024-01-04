import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import ColorMode from "./colorMode";
import SearchBar from "./searchBar";

  
export default function NavigationBar() {
  return (
    <HStack padding={"10px"}>
      <Image boxSize="60px" src={logo} />
      <SearchBar />
      <ColorMode />
    </HStack>
  );
}
