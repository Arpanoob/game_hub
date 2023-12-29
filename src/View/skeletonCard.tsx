import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

function skeletonCard() {
  return (
    <Card>
      <Skeleton borderRadius={10} height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default skeletonCard;
