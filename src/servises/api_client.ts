import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { FetchGamesResponser } from "../model/useData";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b6fcdb1067a04f38af32c7e9cad02dcd",
  },
});
const controller = new AbortController();

class AxiosClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
    console.log("endpoint", endpoint);
  }

  getAll(config: AxiosRequestConfig) {
    return axiosInstance
      .get<FetchGamesResponser<T>>(this.endpoint, {
        ...config,
        signal: controller.signal,
      })
      .then((res) => {
        console.log(res);
        return res.data;
      });
  }
  get = (id: string | number) => {
    return axiosInstance.get<T>(this.endpoint + "/" + id).then((res) => {
      return res.data;
    });
  };
}

export default AxiosClient;
export { axiosInstance };
