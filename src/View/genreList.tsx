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
interface props {
  genre: Genre[];
  isLoading: boolean;
  error: string;
  selectedGenre: Genre | null;
  setSelectedGenre: (genre: Genre) => void;
}

function genreList({
  genre,
  isLoading,
  error,
  setSelectedGenre,
  selectedGenre,
}: props) {
  if (error) return null;
  if (isLoading) return <Spinner marginY={10} />;
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
            <Button fontSize="lg" variant="link" onClick={()=>setSelectedGenre(gen)}>
              {gen.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default genreList;
