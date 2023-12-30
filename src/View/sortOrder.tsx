import React, { useState } from "react";
import { plateformm } from "../model/usePlatform";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { GameQuery } from "../model/useGames";
interface props {
  gameQuery: GameQuery;
  setGameQuery: (p: GameQuery) => void;
}
function sortOrder({ setGameQuery, gameQuery }: props) {
  const [chossen, setChossen] = useState("Relevance");
  const sortOrder = [
    { value: "", lable: "Relevance" },
    { value: "-added", lable: "Data added" },
    { value: "name", lable: "Name" },
    { value: "-released", lable: "Release date" },
    { value: "metacritic", lable: "Popularity" },
    { value: "-rating", lable: "Average Rating" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By : {chossen}
      </MenuButton>
      <MenuList>    
        {sortOrder.map((order) => (
          <MenuItem
            onClick={() => {
              setGameQuery({ ...gameQuery, sortOrder: order.value });
              setChossen(order.lable);
            }}
          >
            {order.lable}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default sortOrder;
