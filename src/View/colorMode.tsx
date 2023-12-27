import { Switch, useColorMode } from "@chakra-ui/react";

export default function ColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
    </header>
  );
}
