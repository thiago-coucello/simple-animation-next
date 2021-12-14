import { Img } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

export function HeaderLogo(): JSX.Element {
  return (
    <NextLink href={"/"}>
      <Img
        margin={5}
        cursor={"pointer"}
        src={"/canvas.png"}
        alignSelf={{ base: "center", md: "flex-start" }}
        h={{ base: 8, md: 10 }}
        borderRadius={"50%"}
      />
    </NextLink>
  );
}
