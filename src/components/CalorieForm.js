import React from 'react';
import { AgeForm } from './AgeForm';
import { SexForm } from './SexForm';
import { ActivityForm } from './ActivityForm';
import {
    Stack,
    Text,
    ChakraProvider, Heading, Container
} from '@chakra-ui/react';


export const CalorieForm = () => {
    const [age, setAge] = React.useState('')
    const [ageUnit, setAgeUnit] = React.useState('years')
    const [activity, setActivity] = React.useState('sed')
    return (
        <Container>
            <Heading size='md' as='h2'>
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
    );
}

