import { plateformm } from "../enteties/plateformm";
import AxiosClient from "../servises/api_client";
const platform = () => {
  const ApiClient = new AxiosClient<plateformm>("/platforms");
  return { ApiClient };
};

export default platform;
