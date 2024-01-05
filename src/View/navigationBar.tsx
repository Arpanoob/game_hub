import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import ColorMode from "./colorMode";
import SearchBar from "./searchBar";
import { Link } from "react-router-dom";

  
export default function NavigationBar() {
  return (
    <HStack padding={"10px"}>
           <Link to={"/"}>
        <Image boxSize="60px" src={logo} objectFit={"cover"} />
      </Link>

      <SearchBar />
      <ColorMode />
    </HStack>
  );
}
