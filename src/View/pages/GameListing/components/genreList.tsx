import { MdHourglassEmpty } from "react-icons/md";
import {
  Box,
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

import { Genre } from "../../../../enteties/Genre";
import GetCroppedUrl from "../../../../servises/image_url";
import FetchGamesResponser from "../../../../enteties/FetchGamesResponser";
import useGameQueryStore from "../../../../model/store/store";
interface props {
  genre: FetchGamesResponser<Genre>;
  isLoading: boolean;
  error: Error | null;
}

function genreList({ genre, isLoading, error }: props) {
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const { gameQuery } = useGameQueryStore();
  console.log(
    window.innerHeight,
    window.outerHeight,
    window.scrollY,
    window.screen.height
  );
  if (error) return null;
  if (isLoading)
    return (
      <Box
        scrollPaddingBottom={20}
        overflowY={"auto"}
        height={`${window.innerHeight - 110}px`}
        paddingBottom={"10px"}
        width={"280px"}
        marginLeft={"-30px"}
        paddingLeft={"30px"}
      >
        {" "}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 19, 20].map(
          () => (
            <Card m={2}>
              <HStack>
                <SkeletonCircle m={2} />
                <CardBody width={"100%"}>
                  <SkeletonText
                    width={"100%"}
                    noOfLines={2}
                    lineHeight={1}
                    spacing={1}
                  />
                </CardBody>
              </HStack>
            </Card>
          )
        )}
      </Box>
    );

  return (
    <>
      <Heading textAlign={"left"} fontSize="2xl" marginY={4}>
        Genres
      </Heading>
      <Box
        scrollPaddingBottom={20}
        overflowY={"auto"}
        height={`${window.innerHeight -109}px`}
        paddingBottom={"15px"}
        width={"280px"}
        marginLeft={"-30px"}
        paddingLeft={"30px"}
      >
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
                    boxSize={"42px"}
                    borderRadius={14}
                  />
                  <Button
                    fontWeight={
                      gen.id === gameQuery.genreId ? "bold" : "normal"
                    }
                    fontSize="x-large"
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
      </Box>
    </>
  );
}

export default genreList;
