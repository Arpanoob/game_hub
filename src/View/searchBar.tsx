import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../model/store/store";

function searchBar() {
  const search = useRef<HTMLInputElement>(null);
  const setSearchQuery=useGameQueryStore(s=>s.setSearchQuery);
  const select = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSearchQuery(search.current?.value?search.current.value:null)
    }
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
