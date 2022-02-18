import React from 'react';
import { AgeForm } from './AgeForm';
import { SexForm } from './SexForm';
import { ActivityForm } from './ActivityForm';
import {
    Stack,
    Text,
    Heading,
} from '@chakra-ui/react';

import { getCalNeeds } from '../req/req';


export const CalorieForm = ({ age, ageUnit, sex, activityLevel, setAge, setAgeUnit, setSex, setActivityLevel }) => {


    let calNeeds
    try {
        calNeeds = getCalNeeds(sex, age, ageUnit, activityLevel)
    } catch (RangeError) {
        calNeeds = 'Enter your stats for estimated needs'
    }

    return (
        <>
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

        </>
    );
}

