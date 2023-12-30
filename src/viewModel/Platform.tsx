import React from "react";
import usePlatform from "../model/usePlatform";
import Platform from "../View/platform";
function platform() {
  const { plateforms, error, isLoading } = usePlatform();
  return <Platform plateforms={plateforms} error={error} />;
}

export default platform;
