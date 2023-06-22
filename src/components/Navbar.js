import React from "react";
import { Flex, Text, Button } from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex
      bgColor="transparent"
      h={"12vh"} // Adjusted heights
      w="100%"
      borderBottom={{ base: "none", md: "2px solid #2C1D64" }}
      justifyContent="space-between"
      alignItems="center"
      p={[2, 4, 6]} // Adjusted horizontal padding
      direction={["column", "row"]}
      mb={{ base: 4, md: 0 }} // Adjusted margin bottom
    >
      <Text
        fontFamily="Josefin Sans"
        color="#CAC1DA"
        fontSize={["xl", "2xl", "4xl"]}
      >
        GitMLIssues
      </Text>
      <Flex direction={["row"]} gap={[2, 4, 6]}>
        <Button
          colorScheme="purple"
          size={["sm", "md", "lg"]}
          bg="#2C1D64"
          color="#CAC1DA"
        >
          Add a Project
        </Button>
        <Button
          colorScheme="purple"
          size={["sm", "md", "lg"]}
          bg="#2C1D64"
          color="#CAC1DA"
        >
          Developers
        </Button>
      </Flex>
    </Flex>
  );
}

export default Navbar;
