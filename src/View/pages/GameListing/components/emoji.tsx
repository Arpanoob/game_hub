import meh from "../../../../assets/meh.webp";
import bull from "../../../../assets/bulls-eye.webp";
import tumbsUp from "../../../../assets/thumbs-up.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface props {
  rating: number;
}
function emoji({ rating }: props) {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: tumbsUp, alt: "recommended", boxSize: "35px" },
    5: { src: bull, alt: "exceptional", boxSize: "45px" },
  };
  return <Image {...emojiMap[rating]} />;
}

export default emoji;
