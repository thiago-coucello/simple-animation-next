import { ChakraProvider, Flex } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import { Header } from "../components/Header";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Flex grow={1} minH={"calc(100vh - 10rem)"}>
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
