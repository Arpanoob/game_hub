import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import AxiosClient from "../servises/api_client";
import { Game } from "../model/useGames";
import { Spinner } from "@chakra-ui/react";

const ApiClient = new AxiosClient<Game>("/games");
const GameDetails = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["game details", slug],
    queryFn: () => ApiClient.get(slug!),
  });
  if (isLoading) <Spinner />;
  return <div>Hi bro {slug + "" + data?.name}</div>;
};

export default GameDetails;
