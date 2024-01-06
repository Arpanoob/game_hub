import React from "react";
import { Game } from "../enteties/Game";
import { SimpleGrid, Text } from "@chakra-ui/react";
import DefinationItems from "./DefinationItems";
import CriticScore from "./criticScore";
interface props {
  data?: Game;
}
const GameAttribute = ({ data }: props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinationItems tilte="Platforms">
        {data?.parent_platforms.map(({ platform }) => (
          <Text>{platform.name}</Text>
        ))}
      </DefinationItems>
      <DefinationItems tilte="metascore">
        <CriticScore score={data?.metacritic!} />
      </DefinationItems>
      <DefinationItems tilte="Genre">
        {data?.genres.map((genre) => (
          <Text>{genre.name}</Text>
        ))}
      </DefinationItems>
      <DefinationItems tilte="Publishers">
        {data?.publishers.map((publisher) => (
          <Text>{publisher.name}</Text>
        ))}
      </DefinationItems>
    </SimpleGrid>
  );
};

export default GameAttribute;
