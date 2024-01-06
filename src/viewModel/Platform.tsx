import React from "react";

import usePlatform from "../model/usePlatforms";
import { plateformm } from "../enteties/plateformm";
import Platform from "../View/platform";
import { GameQuery } from "../enteties/GameQuery";
import { FetchGamesResponser } from "../enteties/FetchGamesResponser";

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
