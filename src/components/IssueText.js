import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

function IssueText({ text, type, isHeader }) {
  const labels = type === "label" ? text.split(",") : [text];
  return (
    <Flex width="100%" wrap="wrap" gap={2} py={2}>
      {labels.slice(0, 3).map((label, index) => (
        <Flex
          key={index}
          justifyContent="space-between" // Distribute space evenly between items
          bg={type === "label" && !isHeader ? "#982A60" : "transparent"} // Set the background color based on the type
          px={2}
          borderRadius={6}
          marginRight={2}
        >
          <Box overflowX="auto" minWidth="0">
            <Text
              fontFamily="Josefin Sans"
              color="#CAC1DA"
              fontSize={["xs", "sm"]}
              px={[2, 0]}
            >
              {label.trim()}
            </Text>
          </Box>
        </Flex>
      ))}
    </Flex>
  );
}

export default IssueText;
