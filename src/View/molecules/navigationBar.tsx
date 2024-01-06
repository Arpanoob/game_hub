import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import ColorMode from "../atom/colorMode";
import SearchBar from "../atom/searchBar";

export default function NavigationBar() {
  return (
    <HStack padding={"10px"}>
      <Link to={"/"}>
        <Image boxSize="60px" src={logo} objectFit={"contain"} />
      </Link>
      <SearchBar  />
      <ColorMode />
    </HStack>
  );
}
