import React from "react";

import usePlatform, { plateformm } from "../model/usePlatform";
import Platform from "../View/platform";
interface props{
  setSelectedPlatform:(p:plateformm)=>void;
}
function platform({ setSelectedPlatform }: props) {
  const { plateforms, error, isLoading } = usePlatform();
  return <Platform plateforms={plateforms} error={error} setSelectedPlatform={setSelectedPlatform}/>;
}

export default platform;
