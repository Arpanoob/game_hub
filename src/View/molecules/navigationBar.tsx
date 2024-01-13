import { HStack, Image, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import ColorMode from "../atom/colorMode";
import SearchBar from "../atom/searchBar";
import "./styles.css";

export default function NavigationBar() {
  const { colorMode, toggleColorMode } = useColorMode();

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar")!.style.top = "0";
    } else {
      document.getElementById("navbar")!.style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <HStack id="navbar" backgroundColor={colorMode === "dark"?'#111':'#eee'} zIndex={1000} padding={"10px"}>
      <Link to={"/"}>
        <Image boxSize="60px" src={logo} objectFit={"contain"} />
      </Link>
      <SearchBar />
      <ColorMode />
    </HStack>
  );
}
