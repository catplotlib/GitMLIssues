import React from "react";
import { Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Projects from "./Projects";
import Issues from "./Issues";
import { useEffect, useState } from "react";
function Home() {
  const [issues, setIssues] = useState([]);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/issues/")
      .then((response) => response.json())
      .then((data) => setIssues(data));

    fetch("http://localhost:8000/api/projects/")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  console.log(issues);

  return (
    <Flex direction="column">
      <Navbar />
      <Flex>
        <Projects projects={projects}/>
        <Issues issues={issues} />
      </Flex>
    </Flex>
  );
}

export default Home;
