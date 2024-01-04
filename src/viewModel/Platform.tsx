import React from "react";

import usePlatform, { plateformm } from "../model/usePlatforms";
import Platform from "../View/platform";
import { GameQuery } from "../model/useGames";
import { FetchGamesResponser } from "../model/useData";

function platform() {
  const { data, error, isLoading } = usePlatform();
  return (
    <Platform
      plateforms={data as FetchGamesResponser<plateformm>}
      error={error as Error}
    />
  );
}

export default platform;
