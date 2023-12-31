import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { GameQuery } from "../model/useGames";

interface props {
  gameQuery: GameQuery;
  setGameQuery: (q: GameQuery) => void;
}
function searchBar({ gameQuery, setGameQuery }: props) {
  const search = useRef<HTMLInputElement>(null);
  const select = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setGameQuery({
        ...gameQuery,
        searchQuery: search.current?.value ? search.current?.value : null,
      });
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
