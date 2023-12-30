import React from "react";
import { Genre } from "../model/useGenre";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import GetCroppedUrl from "../servises/image_url";
import { GameQuery } from "../model/useGames";
interface props {
  genre: Genre[];
  isLoading: boolean;
  error: string;
  gameQuery: GameQuery;
  setGameQuery: (q: GameQuery) => void;
}

function genreList({
  genre,
  gameQuery,
  setGameQuery,
  isLoading,
  error,
}: props) {
  if (error) return null;
  if (isLoading) return <Spinner marginY={10} />;
  console.log("selectedGerne", gameQuery.genre);
  return (
    <List>
      {genre.map((gen) => (
        <ListItem key={gen.id} padding="5px">
          <HStack>
            <Image
              src={GetCroppedUrl(gen.image_background)}
              boxSize={"32px"}
              borderRadius={8}
            />
            <Button
              fontWeight={gen.id === gameQuery.genre?.id ? "bold" : "normal"}
              fontSize="lg"
              variant="link"
              onClick={() => {
                console.log("=", gen.id);
                setGameQuery({ ...gameQuery, genre: gen });
              }}
            >
              {gen.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default genreList;
