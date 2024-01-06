import { Trailer } from "../enteties/Trailer";
import AxiosClient from "../servises/api_client";
const trailer = (gameId: number) => {
  const ApiClient = new AxiosClient<Trailer>(`/games/${gameId}/movies`);
  return { ApiClient };
};

export default trailer;
