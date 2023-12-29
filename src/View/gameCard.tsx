import { Card, HStack, Heading, Image, Text } from "@chakra-ui/react";

import { Game } from "../model/useGames";
import PlatformIconsList from "./platformIconsList";
import CriticScore from "../View/criticScore";
import getCroppedUrl from "../servises/image_url";
function gameCard({ game }: { game: Game }) {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={getCroppedUrl(game.background_image)} overflow="hidden" />
      <Heading fontSize="2xl">{game.name}</Heading>
      <HStack justifyContent="space-between">
        <PlatformIconsList parent_platforms={game.parent_platforms} />
        <CriticScore score={game.metacritic} />
      </HStack>
    </Card>
  );
}

export default gameCard;
