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
    const [age, setAge] = React.useState('')
    const [ageUnit, setAgeUnit] = React.useState('years')
    const [sex, setSex] = React.useState('')
    const [activityLevel, setActivityLevel] = React.useState('sed')

    let calNeeds
    try {
        calNeeds = getCalNeeds(sex, age, ageUnit, activityLevel)
    } catch (RangeError) {
        calNeeds = 'Enter your stats for estimated needs'
    }

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
            </Stack>
            <Heading mt={4} size='md'>Estimated caloric needs</Heading>
            <Text>{calNeeds}</Text>

        </Container>
    );
}

