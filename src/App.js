import React from "react";
import Home from "./layout/Home";
import { Flex } from "@chakra-ui/react";
function App() {
  return (
    <Flex bgColor="#1C1048" minHeight="100vh">
      <Home />
    </Flex>
  );
}

export default App;
