import AxiosClient from "../servises/api_client";
import ScreenShots  from "../enteties/ScreenShots.1";
const games = (gameId:number) => {
    const ApiClient = new AxiosClient<ScreenShots>(
        `/games/${gameId}/screenshots`
      );
  return { ApiClient };
};

export default games;
