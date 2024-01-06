import usePlatform from "../model/usePlatforms";
import { plateformm } from "../enteties/plateformm";
import Platform from "../View/platform";
import { FetchGamesResponser } from "../enteties/FetchGamesResponser";

function platform() {
  const { data, error, isLoading } = usePlatform();
  return (
    <Platform
      plateforms={data as FetchGamesResponser<plateformm>}
      error={error as Error}
      isLoading={isLoading}
    />
  );
}

export default platform;
