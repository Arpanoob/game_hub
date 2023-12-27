import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b6fcdb1067a04f38af32c7e9cad02dcd",
  },
});
