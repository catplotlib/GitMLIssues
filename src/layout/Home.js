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
    fetch("https://catplotlib.pythonanywhere.com/api/issues/")
      .then((response) => response.json())
      .then((data) => setIssues(data));

    fetch("https://catplotlib.pythonanywhere.com/api/projects/")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

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
