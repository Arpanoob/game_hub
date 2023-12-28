import { Card, Heading, Image } from "@chakra-ui/react";
import { Game } from "../model/useGames";

function gameCard({ game }: { game: Game }) {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} overflow="hidden" />
      <Heading fontSize="2xl">{game.name}</Heading>
    </Card>
  );
}

export default gameCard;
