import { ChakraProvider, Heading } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Header } from './components/Header';
import { AgeForm } from './components/AgeForm';
import { SexForm } from './components/SexForm';
import { ActivityForm } from './components/ActivityForm';
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
          <SexForm />
          <ActivityForm />
        </Stack>
      </Container>
    </ChakraProvider >
  );
}

export default App;
