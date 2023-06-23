import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import IssueText from "./IssueText";

function Issue({ key, issue }) {
  return (
    <Flex
      bgColor="#1C1048"
      h="auto" // Set the height to be auto-adjustable
      border={"1px solid #2C1D64"}
      w={["90vw", "75vw"]}
      justifyContent="space-around"
      alignItems={["flex-start", "center"]}
      direction={["column", "row"]}
      py={[4, 0]}
      px={8}
      _hover={
        !issue.isHeader && {
          transform: "scale(1.02)",
          transition: "transform 0.3s ease-in-out",
        }
      }
      cursor={"pointer"}
      onClick={() => {
        // If `isHeader` is true, return immediately.
        if (issue.isHeader) {
          return;
        }
        // Otherwise, open the issue URL in a new tab.
        window.open(issue.url, "_blank");
      }}
    >
      <IssueText text={issue.repository} />
      <IssueText text={issue.title} />
      <IssueText text={issue.labels} type="label" isHeader={issue.isHeader} />
      <IssueText text={issue.owner} />
    </Flex>
  );
}

export default Issue;
