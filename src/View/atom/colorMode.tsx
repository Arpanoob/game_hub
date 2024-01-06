import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

export default function ColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text whiteSpace="nowrap">{colorMode.toUpperCase()} MODE</Text>
    </HStack>
  );
}
