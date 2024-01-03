import React, { useState } from "react";
import { plateformm } from "../model/usePlatform";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { GameQuery } from "../model/useGames";
interface props {
  plateforms: plateformm[] ;
  error: Error ;
  gameQuery: GameQuery;
  setGameQuery: (p: GameQuery) => void;
}
function plaatform({ plateforms, error, setGameQuery, gameQuery }: props) {
  const [chossenPlatform, setChossenPlatform] = useState("Platform");
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {chossenPlatform}
      </MenuButton>
      <MenuList>
        <MenuItem
          onClick={() => {
            setChossenPlatform("Platform");
            setGameQuery({ ...gameQuery, platform: null });
          }}
        >
          none
        </MenuItem>
        {plateforms?.map((plateform) => (
          <MenuItem
            key={plateform.id}
            onClick={() => {
              setGameQuery({ ...gameQuery, platform: plateform });
              setChossenPlatform(plateform.name);
            }}
          >
            {plateform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default plaatform;
