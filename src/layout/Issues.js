import React from "react";
import { Flex } from "@chakra-ui/react";
import Issue from "../components/Issue";

function Issues({ issues }) {
  const headerIssue = {
    id: "header",
    repository: "Repository",
    title: "Title",
    labels: "Labels",
    owner: "Opened By",
    isHeader: true,
  };

  return (
    <Flex direction="column" ml={[4, 0]}>
      <Flex display={{ base: "None", md: "flex" }}>
        <Issue issue={headerIssue} />
      </Flex>
      {issues.map((issue) => (
        <Issue key={issue.id} issue={issue} />
      ))}
    </Flex>
  );
}

export default Issues;
