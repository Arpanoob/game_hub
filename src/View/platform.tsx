import React from "react";
import usePlatform from "../model/usePlatform";
import { plateform } from "../model/usePlatform";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
interface props {
  plateforms: plateform[];
  error: string;
}
function platform({ plateforms, error }: props) {
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} >
        Plateforms
      </MenuButton>
      <MenuList>
        {plateforms.map((plateform) => (
          <MenuItem>{plateform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default platform;
