import { Button, Text } from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";

interface props {
  children: ReactNode;
}
const limit = 1000;

const ExpandableText = ({ children }: props) => {
  const [expanded, setExpanded] = useState(false);
  const child = children?.toString();
  if (!child) return null;
  if (child.length <= limit) return <Text>{child}</Text>;
  const summry = child.substring(0, limit);
  return (
    <>
      <Text>
        {expanded ? child : summry + "..."}
        <Button
          size="xs"
          fontWeight={"bold"}
          colorScheme="yellow"
          onClick={() => setExpanded((e) => !e)}
        >
          {expanded ? "show less" : "show more"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
