import { GridItem, SimpleGrid, Skeleton, SkeletonText } from "@chakra-ui/react";

const SkeletonForGameDetails = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <SkeletonText height={"100px"} noOfLines={5} />
        <SkeletonText mt="4" noOfLines={10} skeletonHeight="2" />
        <SimpleGrid mt={5} columns={2}>
          {[1, 2, 3, 4].map((o) => (
            <SkeletonText key={o} m={20} />
          ))}
        </SimpleGrid>
      </GridItem>
      <GridItem>
        <Skeleton height={"400px"} />
        <SimpleGrid mt={"10px"} columns={2} spacing={2}>
          {[1, 2, 3, 4, , 6, 7].map((o) => (
            <Skeleton mt={1} key={o} height={"200px"} />
          ))}
        </SimpleGrid>
      </GridItem>
    </SimpleGrid>
  );
};

export default SkeletonForGameDetails;
