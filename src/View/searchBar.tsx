import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../model/store/store";
import { useNavigate } from "react-router-dom";

function searchBar() {
  const search = useRef<HTMLInputElement>(null);
  const setSearchQuery = useGameQueryStore((s) => s.setSearchQuery);
  const navigate = useNavigate();

  const select = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSearchQuery(search.current?.value ? search.current.value : undefined);
    }
    navigate("/");
  };

  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        ref={search}
        borderRadius={20}
        onKeyDown={select}
        placeholder="Search Games...."
        variant="fill"
      />
    </InputGroup>
  );
}

export default searchBar;
