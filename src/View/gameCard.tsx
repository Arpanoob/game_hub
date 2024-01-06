import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";

import { Game } from "../enteties/Game";
import PlatformIconsList from "./platformIconsList";
import CriticScore from "../View/criticScore";
import getCroppedUrl from "../servises/image_url";
import empty from "../assets/ONKJBH0.webp";
import Emoji from "./emoji";
import { Link } from "react-router-dom";
function gameCard({ game }: { game: Game }) {
  return (
    <Card>
      {game.background_image ? (
        <Image
          objectFit={"cover"}
          src={getCroppedUrl(game.background_image)}
          overflow="hidden"
        />
      ) : (
        <Image
          src={empty}
          height="300px"
          width={"600px"}
          objectFit={"cover"}
          overflow={"hidden"}
        />
      )}
      <CardBody paddingY={10}>
        <Heading fontSize="2xl">
          <Link to={"/games/" + game.slug}>{game.name}</Link>
        </Heading>
        <HStack marginTop={2} justifyContent="space-between" marginBottom={3}>
          <PlatformIconsList parent_platforms={game.parent_platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
}

export default gameCard;
