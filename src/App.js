import React from 'react';
import { Header } from './components/Header';
import { CalorieForm } from './components/CalorieForm'
import {
  ChakraProvider, Container
} from '@chakra-ui/react';
import { FoodSelect } from './components/FoodSelect';


function App() {
  return (
    <ChakraProvider>
      <Container>
        <Header />
        <FoodSelect />
        <CalorieForm />
      </Container>
    </ChakraProvider >
  );
}

export default App;
