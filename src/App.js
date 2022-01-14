import React from 'react';
import { Header } from './components/Header';
import { CalorieForm } from './components/CalorieForm'
import {
  ChakraProvider, Box, SimpleGrid
} from '@chakra-ui/react';
import { FoodSelect } from './components/FoodSelect';


function App() {
  return (
    <ChakraProvider>
      <Box>
        <Header />
        <SimpleGrid mt={4} columns={[1, null, 3]} spacing='20px'>
          <FoodSelect />

        </SimpleGrid>
      </Box>
    </ChakraProvider >
  );
}

export default App;
