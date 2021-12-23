import React from 'react';
import { Header } from './components/Header';
import { AgeForm } from './components/AgeForm';
import { SexForm } from './components/SexForm';
import { ActivityForm } from './components/ActivityForm';
import {
  Stack,
  Text,
  ChakraProvider, Heading, Container
} from '@chakra-ui/react';


function App() {
  const [age, setAge] = React.useState()
  const [ageUnit, setAgeUnit] = React.useState('years')
  const [activity, setActivity] = React.useState('sed')
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
          <AgeForm age={age} ageUnit={ageUnit} setAge={setAge} setAgeUnit={setAgeUnit} />
          <SexForm />
          <ActivityForm setActivity={setActivity} />
          <div>
            {age}
            {ageUnit}
            {activity}
          </div>
        </Stack>
      </Container>
    </ChakraProvider >
  );
}

export default App;
