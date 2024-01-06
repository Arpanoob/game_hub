import { useState } from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../../../../model/store/store";

function sortOrder() {
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

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
        Order By : {gameQuery.sortOrder || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((order) => (
          <MenuItem
            key={order.lable}
            onClick={() => {
              setSortOrder(order.value);
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
