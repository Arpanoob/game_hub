import React from "react";
import { Genre } from "../model/useGenre";
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import GetCroppedUrl from "../servises/image_url";
import { GameQuery } from "../model/useGames";
import { MdHourglassEmpty } from "react-icons/md";
import { FetchGamesResponser } from "../model/useData";
interface props {
  genre: FetchGamesResponser<Genre> ;
  isLoading: boolean;
  error: Error|null;
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

  return (
    <>
      <Heading textAlign={"left"} fontSize="2xl" marginY={3}>
        Genres
      </Heading>
      <List>
        {genre?.results?.length === 0 && (
          <div>
            <MdHourglassEmpty />
          </div>
        )}
        {genre?.results?.length !== 0 &&
          genre?.results?.map((gen) => (
            <ListItem key={gen.id} padding="5px">
              <HStack>
                <Image
                  src={GetCroppedUrl(gen.image_background)}
                  objectFit={"cover"}
                  boxSize={"32px"}
                  borderRadius={8}
                />
                <Button
                  fontWeight={
                    gen.id === gameQuery.genreId ? "bold" : "normal"
                  }
                  fontSize="lg"
                  variant="link"
                  whiteSpace={"normal"}
                  textAlign={"left"}
                  onClick={() => {
                    setGameQuery({ ...gameQuery, genreId: gen.id });
                  }}
                >
                  {gen.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
      </List>
    </>
  );
}

export default genreList;
