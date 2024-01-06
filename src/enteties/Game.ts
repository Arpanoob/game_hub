import { Genre } from "./Genre";
import { platform } from "./platform";
import { publisher } from "./publisher";

export interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: publisher[];
  description_raw: string;
  background_image: string;
  parent_platforms: platform[];
  metacritic: number;
  rating_top: number;
}
