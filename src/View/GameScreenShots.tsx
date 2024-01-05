import React from "react";
import useScreenShots from "../model//useScreenShots";
import { Image, SimpleGrid, Spinner, Text } from "@chakra-ui/react";

interface props {
  gameId: number;
}
const GameScreenShots = ({ gameId }: props) => {
  const { data, isLoading } = useScreenShots(gameId);
  console.log("aa", data);
  if (isLoading) return <Spinner />;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }}>
      {data?.results.map((r) => (
        <Image src={r.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
