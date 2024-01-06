import React from "react";
import { Genre } from "../enteties/Genre";
import {
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Spinner,
  Text,
} from "@chakra-ui/react";
import GetCroppedUrl from "../servises/image_url";
import { GameQuery } from "../enteties/GameQuery";
import { MdHourglassEmpty } from "react-icons/md";
import { FetchGamesResponser } from "../enteties/FetchGamesResponser";
import useGameQueryStore from "../model/store/store";
interface props {
  genre: FetchGamesResponser<Genre>;
  isLoading: boolean;
  error: Error | null;
}

function genreList({ genre, isLoading, error }: props) {
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const { gameQuery } = useGameQueryStore();

  if (error) return null;
  if (isLoading)
    return (
      <>
        {" "}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 19, 20].map(
          () => (
            <Card m={2}>
              <HStack>
                <SkeletonCircle m={2} />
                <CardBody>
                  <SkeletonText noOfLines={2} lineHeight={1} spacing={1} />
                </CardBody>
              </HStack>
            </Card>
          )
        )}
      </>
    );

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
                  fontWeight={gen.id === gameQuery.genreId ? "bold" : "normal"}
                  fontSize="lg"
                  variant="link"
                  whiteSpace={"normal"}
                  textAlign={"left"}
                  onClick={() => {
                    setGenreId(gen.id);
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
