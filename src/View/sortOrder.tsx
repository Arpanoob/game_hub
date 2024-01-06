import React, { useState } from "react";
import { plateformm } from "../enteties/plateformm";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { GameQuery } from "../enteties/GameQuery";
import useGameQueryStore from "../model/store/store";

function sortOrder() {
  const [chossen, setChossen] = useState("Relevance");
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

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
            key={order.lable}
            onClick={() => {
              setSortOrder(order.value);
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
