import { Genre } from "../enteties/Genre";
import AxiosClient from "../servises/api_client";
const genres = () => {
  const ApiClient = new AxiosClient<Genre>("/genres");
  return { ApiClient };
};

export default genres;
