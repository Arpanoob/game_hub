import { Image, SimpleGrid, Skeleton } from "@chakra-ui/react";
import useScreenShots from "../../../../model/useScreenShots";

interface props {
  gameId: number;
}
const GameScreenShots = ({ gameId }: props) => {
  const { data, isLoading } = useScreenShots(gameId);
  if (isLoading)
    return (
      <SimpleGrid>
        {" "}
        {[1, 2, 3, 4, 5, 6].map((p) => (
          <Skeleton mt={1} height={"200"} />
        ))}
      </SimpleGrid>
    );
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }}>
      {data?.results.map((r) => (
        <Image src={r.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
