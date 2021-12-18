import { ChakraProvider, Heading } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import Header from './components/Header';
import AgeForm from './components/AgeForm';
import { GenderForm } from './components/GenderForm';
import {
  Stack,
  Text
} from '@chakra-ui/react';


function App() {
  return (
    <ChakraProvider>
      <Container>
        <Header />
        <Heading mt={7} size='md' as='h2'>
          About You
        </Heading>
        <Text>
          Used to get your dietary needs
        </Text>
        <Stack mt={4} spacing={4}>
          <AgeForm />
          <GenderForm />
        </Stack>
      </Container>
    </ChakraProvider >
  );
}

export default App;
