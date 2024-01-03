import React, { useState } from "react";
import { plateformm } from "../model/usePlatform";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { GameQuery } from "../model/useGames";
import { FetchGamesResponser } from "../model/useData";
interface props {
  plateforms: FetchGamesResponser<plateformm>;
  error: Error;
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
            setGameQuery({ ...gameQuery });
          }}
        >
          none
        </MenuItem>
        {plateforms?.results?.map((plateform) => (
          <MenuItem
            key={plateform.id}
            onClick={() => {
              setGameQuery({ ...gameQuery, platformId: plateform.id });
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
