import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { plateformm } from "../../../../enteties/plateformm";
import { BsChevronDown } from "react-icons/bs";
import FetchGamesResponser from "../../../../enteties/FetchGamesResponser";
import useGameQueryStore from "../../../../model/store/store";
import usePlatform from "../../../../model/usePlatform";
interface props {
  plateforms: FetchGamesResponser<plateformm>;
  error: Error;
  isLoading: boolean;
}
function plaatform({ plateforms, error }: props) {
  const setPlatforms = useGameQueryStore((s) => s.setPlatforms);
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const chossenPlatform = usePlatform(gameQuery?.platformId as number);
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {chossenPlatform.platform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {plateforms?.results?.map((plateform) => (
          <MenuItem
            key={plateform.id}
            onClick={() => {
              setPlatforms(plateform.id);
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
