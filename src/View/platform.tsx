import React, { useState } from "react";
import { plateformm } from "../model/usePlatform";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
interface props {
  plateforms: plateformm[];
  error: string;
  setSelectedPlatform: (p: plateformm | null) => void;
}
function platform({ plateforms, error, setSelectedPlatform }: props) {
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
            setSelectedPlatform(null);
          }}
        >
          none
        </MenuItem>
        {plateforms.map((plateform) => (
          <MenuItem
            onClick={() => {
              setSelectedPlatform(plateform);
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

export default platform;
