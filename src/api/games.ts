import { Game } from "../enteties/Game";
import AxiosClient from "../servises/api_client";
const games = () => {
  const ApiClient = new AxiosClient<Game>("/games");
  return { ApiClient };
};

export default games;
