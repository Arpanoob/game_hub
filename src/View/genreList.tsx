import React from "react";
import { Genre } from "../model/useGenre";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import GetCroppedUrl from "../servises/image_url";
interface props {
  genre: Genre[];
  isLoading: boolean;
  error: string;
}

function genreList({ genre, isLoading, error }: props) {
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
            <Text fontSize="lg"> {gen.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default genreList;
