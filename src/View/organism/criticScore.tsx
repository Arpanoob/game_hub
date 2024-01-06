import { Badge } from "@chakra-ui/react";

interface props {
  score: number;
}
function criticScore({ score }: props) {
  const color = score > 75 ? "green" : score > 65 ? "yellow" : "";
  return (
    <Badge fontSize="14px" colorScheme={color} borderRadius={4} paddingX={2}>
      {score}
    </Badge>
  );
}

export default criticScore;
