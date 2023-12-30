import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";

import { Game } from "../model/useGames";
import PlatformIconsList from "./platformIconsList";
import CriticScore from "../View/criticScore";
import getCroppedUrl from "../servises/image_url";
import empty from "../assets/ONKJBH0.jpg";
function gameCard({ game }: { game: Game }) {
  return (
    <Card>
      {game.background_image ? (
        <Image src={getCroppedUrl(game.background_image)} overflow="hidden" />
      ) : (
        <Image src={empty} height="210px" />
      )}
      <CardBody paddingY={10}>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconsList parent_platforms={game.parent_platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default gameCard;
