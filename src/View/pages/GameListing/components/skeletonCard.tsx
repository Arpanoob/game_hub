import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";


function skeletonCard() {
  return (
    <Card>
      <Skeleton borderRadius={10} height="200px" />
      <CardBody paddingY={10}>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default skeletonCard;
