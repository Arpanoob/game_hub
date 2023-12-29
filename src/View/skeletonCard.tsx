import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

function skeletonCard() {
  return (
    <Card borderRadius={10} width={"300px"}>
      <Skeleton borderRadius={10} height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default skeletonCard;
