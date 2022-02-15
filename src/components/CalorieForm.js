import React from 'react';
import { AgeForm } from './AgeForm';
import { SexForm } from './SexForm';
import { ActivityForm } from './ActivityForm';
import {
    Stack,
    Text,
    Heading,
    Container
} from '@chakra-ui/react';

import { getCalNeeds } from '../req/req';


export const CalorieForm = () => {
    const [age, setAge] = React.useState('13')
    const [ageUnit, setAgeUnit] = React.useState('months')
    const [sex, setSex] = React.useState('female')
    const [activityLevel, setActivityLevel] = React.useState('sed')
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
                <SexForm sex={sex} setSex={setSex} />
                <ActivityForm setActivityLevel={setActivityLevel} />
                <Text>Your calorie needs is {getCalNeeds(sex, age, ageUnit, activityLevel)}</Text>
            </Stack>

        </Container>
    );
}

