import { Box, Heading, HStack, useColorModeValue } from "@chakra-ui/react";
import React from "react";

import { HeaderLogo } from "./Logo";

export function Header(): JSX.Element {
  const bgColor = useColorModeValue("teal.400", "teal.700");

  return (
    <HStack bg={bgColor} flex={1} h={"5rem"} justifyContent={"space-between"}>
      <HeaderLogo />
      <Heading>A Simple Animation</Heading>
      <Box></Box>
    </HStack>
  );
}
