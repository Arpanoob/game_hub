import React from "react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import { platform } from "../model/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
function platformIconsList({
  parent_platforms,
}: {
  parent_platforms: platform[];
}) {
  if (!parent_platforms) return "";
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack margin={1}>
      {parent_platforms.map((x) => (
        <Icon
          key={x.platform.id}
          as={iconMap[x.platform.slug]}
          color="gray.500"
        />
      ))}
    </HStack>
  );
}

export default platformIconsList;
