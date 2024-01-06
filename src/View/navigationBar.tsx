import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import ColorMode from "./colorMode";
import SearchBar from "./searchBar";

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
