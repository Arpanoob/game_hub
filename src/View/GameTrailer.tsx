import React from "react";
import useTrailers from "../model/useTrailers";
import { Spinner } from "@chakra-ui/react";

interface props {
  gameId: number;
}
const GameTrailer = ({ gameId }: props) => {
  const { data, isLoading } = useTrailers(gameId);
  if (isLoading) return <Spinner />;
  return (
    <video
      src={data?.results[0]?.data[480]}
      poster={data?.results[0].preview}
      controls
    ></video>
  );
};

export default GameTrailer;
