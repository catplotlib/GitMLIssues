import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import ProjCard from "../components/ProjCard";

function Projects({projects}) {
  return (
    <Flex
      display={["none", "none", "flex"]} // Hide on smaller screens, visible from "md" upwards
      bgColor="#1C1048"
      w={["0", "0", "45vh"]} // Responsive width
      borderRight={["none", "none", "2px solid #2C1D64"]} // Hide border on smaller screens
      alignItems="center"
      direction="column"
      gap={8}
      h="100vh"
      overflowY="auto" // Added this line
    >
      <Text color="#CAC1DA" fontSize="xl" mt={8}>
        Projects
      </Text>
      {projects.map((project) => (
        <ProjCard key={project.id} project={project} />
        ))}
    </Flex>
  );
}

export default Projects;
