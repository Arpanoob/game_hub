import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import ColorMode from "./colorMode";

export default function NavigationBar() {
  return (
    <HStack>
      <Image boxSize="60px" src={logo} />
      <ColorMode />
    </HStack>
  );
}
