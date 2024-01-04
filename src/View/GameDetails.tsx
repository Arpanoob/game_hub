import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import AxiosClient from "../servises/api_client";
import { Game } from "../model/useGames";
import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "./ExpandableText";
import DefinationItems from "./DefinationItems";
import CriticScore from "./criticScore";
import GameAttribute from "./GameAttribute";

const ApiClient = new AxiosClient<Game>("/games");
const GameDetails = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["game details", slug],
    queryFn: () => ApiClient.get(slug!),
  });

  if (isLoading) <Spinner />;
  return (
    <>
      <Box textAlign="left">
        <Heading>{data?.name}</Heading>
        <ExpandableText>{data?.description_raw} </ExpandableText>
        <GameAttribute data={data} />
      </Box>
    </>
  );
};

export default GameDetails;
