import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { BsSearch } from "react-icons/bs";

import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

import useGameQueryStore from "../../model/store/store";

function searchBar() {
  const [cross, setCross] = useState(false);
  const search = useRef<HTMLInputElement>(null);
  const setSearchQuery = useGameQueryStore((s) => s.setSearchQuery);
  const navigate = useNavigate();

  const select = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (search.current?.value) {
      setCross(true);
    }
    if (event.key === "Enter") {
      setSearchQuery(search.current?.value ? search.current.value : undefined);
      navigate("/");
    }
  };

  const clearSearch = () => {
    if (search.current) {
      setCross(false);
      search.current.value = ""; // Set value to empty string to clear the input
      setSearchQuery(undefined);
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
      {cross && (
        <InputRightElement onClick={clearSearch} children={<MdCancel />} />
      )}
    </InputGroup>
  );
}

export default searchBar;
