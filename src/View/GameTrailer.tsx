import React from "react";
import useTrailers from "../model/useTrailers";
import { Skeleton, Spinner } from "@chakra-ui/react";

interface props {
  gameId: number;
}
const GameTrailer = ({ gameId }: props) => {
  const { data, isLoading } = useTrailers(gameId);
  console.log("vedio", data);
  if (isLoading) return <Skeleton height={"400px"} />;
  return (
    <video
      src={data?.results[0]?.data[480]}
      poster={
        data?.results.length !== 0
          ? data?.results[0].preview
          : "https://media.rawg.io/media/movies/955/9556607dec02bf324c87aa33bba2ed8e.jpg"
      }
      controls
    ></video>
  );
};

export default GameTrailer;
