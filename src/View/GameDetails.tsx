import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { Box, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";

import ExpandableText from "./ExpandableText";
import GameAttribute from "./GameAttribute";
import GameTrailer from "./GameTrailer";
import GameScreenShots from "./GameScreenShots";
import SkeletonForGameDetails from "./SkeletonForGameDetails";
import games from "../api/games";

const GameDetails = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["game details", slug],
    queryFn: () => games().ApiClient.get(slug!),
  });

  if (isLoading) {
    return <SkeletonForGameDetails />;
  }

  if (!data && isLoading === false) return null;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Box textAlign="left">
          <Heading>{data?.name}</Heading>
          <ExpandableText>{data?.description_raw} </ExpandableText>{" "}
          <GameAttribute data={data} />
        </Box>
      </GridItem>
      <GridItem>
        <GameTrailer gameId={data.id} />
        <GameScreenShots gameId={data.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetails;
