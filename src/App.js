import React, { useState, useEffect } from 'react';
import Home from './layout/Home';
import { Flex, Spinner, Center } from '@chakra-ui/react';

function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);

  if (isLoading) {
    return (
      <Center height="100vh">
        <Spinner size="xl" />
      </Center>
    ); // Spinner centered on the screen
  }

  return (
    <Flex bgColor="#1C1048" minHeight="100vh">
      <Home />
    </Flex>
  );
}

export default App;
