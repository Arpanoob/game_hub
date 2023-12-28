import { Card, Heading, Image, Text } from "@chakra-ui/react";

import { Game } from "../model/useGames";
import PlatformIconsList from "./platformIconsList";
function gameCard({ game }: { game: Game }) {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} overflow="hidden" />
      <Heading fontSize="2xl">{game.name}</Heading>
      <PlatformIconsList parent_platforms={game.parent_platforms}/>
    </Card>
  );
}

export default gameCard;
