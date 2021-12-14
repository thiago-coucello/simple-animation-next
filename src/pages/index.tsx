import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const circleBg = "#FFFFFF";
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [velocity, setVelocity] = useState(1);

  useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }, []);

  function calcPosition(): void {
    if (xPos === width) {
      setVelocity(-1);
    }

    if (xPos === 0) {
      setVelocity(1);
    }

    setXPos(xPos + velocity);
  }

  setInterval(() => calcPosition(), 500);

  return (
    <Flex minH={"calc(100vh - 5rem)"} minW={"calc(100vw)"}>
      <Box
        bg={circleBg}
        h={"1rem"}
        position={"absolute"}
        top={height / 2}
        right={width / 2}
        rounded={"full"}
        transform={"auto"}
        translate="yes"
        translateX={xPos}
        translateY={yPos}
        w={"1rem"}
      >
        {" "}
      </Box>
    </Flex>
  );
};

export default Home;
