import React from 'react'
import {
    Box,
    Heading,
    Spacer,
    VStack,
    Stack,
    Flex,
} from '@chakra-ui/react'
import { FoodItem } from './FoodItem'
export const Log = ({ myFoodState, setMyFoodState }) => {
    return (
        <>
            <Stack>
                <Box>
                    <Heading mb={2} size={'md'}>
                        Log
                    </Heading>
                    {myFoodState.map(food =>
                        <FoodItem food={food} key={food.id} setMyFoodState={setMyFoodState} />)}
                </ Box>
                <Spacer />
                <Box>
                    <Heading mb={2} size={'md'}>
                        Summary
                    </Heading>
                    {myFoodState
                        .filter(food => food.group === 'green')
                        .map(food => food.quantity)
                        .reduce(
                            (prev, cur) => prev + cur,
                            0
                        )
                    }
                </Box>
            </Stack>
        </>
    )
}
