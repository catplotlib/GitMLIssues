import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

function ProjectHeader({ repository }) {
  return (
    <Flex
      borderBottom="1px solid #604F9F"
      alignItems="center"
      justify="center"
      w="80%"
      fontSize="xl"
    >
      <Text color="#CAC1DA">{repository}</Text>
    </Flex>
  );
}

function ProjectFooter({ owner, lang }) {
  return (
    <Flex
      borderTop="1px solid #604F9F"
      alignItems="center"
      justify="space-between"
      w="80%"
    >
      <Flex
        bg="#1C1048"
        w="auto"
        px={2}
        h={6}
        alignItems="center"
        justify="center"
        mt={1}
        borderRadius="5px"
      >
        <Text color="#CAC1DA" fontSize="sm">
          {owner}
        </Text>
      </Flex>
      <Text color="#CAC1DA" fontSize="sm">
        {lang}
      </Text>
    </Flex>
  );
}

function ProjCard({ key, project }) {
  const handleClick = () => {
    window.open(project.repo, "_blank");
  };

  return (
    <Flex
      h="auto"
      maxW="20vw"
      bg="#2C1D64"
      justifyContent="space-between"
      alignItems="center"
      direction="column"
      borderRadius="10px"
      padding={4}
      onClick={handleClick}
      _hover={{
        cursor: "pointer",
        transform: "scale(1.02)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <ProjectHeader repository={project.repository} />
      <Text fontSize="sm" color="#CAC1DA" textAlign="center">
        {project.desc}
      </Text>
      <ProjectFooter owner={project.owner} lang={project.lang} />
    </Flex>
  );
}

export default ProjCard;
