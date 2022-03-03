import React from 'react';
import { AgeForm } from './forms/AgeForm';
import { SexForm } from './forms/SexForm';
import { ActivityForm } from './forms/ActivityForm';
import {
    Stack,
    Text,
    Heading,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    Button,
} from '@chakra-ui/react';

import { getCalNeeds } from '../req/req';


export const CalorieForm = ({ calorieModalIsOpen, calorieModalOnClose, calNeeds, setCalNeeds, age, ageUnit, sex, activityLevel, setAge, setAgeUnit, setSex, setActivityLevel }) => {

    React.useEffect(() => {
        try {
            setCalNeeds(getCalNeeds(sex, age, ageUnit, activityLevel))
        } catch (RangeError) { }
    })


    return (
        <Modal isOpen={calorieModalIsOpen} onClose={calorieModalOnClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <Heading mb={1} size='md' as='h2'>
                        About You
                    </Heading>
                    <Text>
                        Used to get your dietary needs
                    </Text>
                    <Stack mt={4} spacing={4}>
                        <AgeForm age={age} ageUnit={ageUnit} setAge={setAge} setAgeUnit={setAgeUnit} />
                        <SexForm sex={sex} setSex={setSex} age={age} />
                        <ActivityForm setActivityLevel={setActivityLevel} />
                    </Stack>
                    <Heading mt={4} as='h2' size='md' mb={1}>Estimated caloric needs</Heading>
                    <Text>{calNeeds}</Text>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={calorieModalOnClose}>
                        Save
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>

    );
}

