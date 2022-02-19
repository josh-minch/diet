import React from 'react'
import {
    Box,
    Divider,
    Heading,
    Spacer,
    Stack,
    Text
} from '@chakra-ui/react'
import { FoodItem } from './FoodItem'
import { getReq } from '../req/req'
import { foodGroupToDisplayName } from '../req/req'


const Req = ({ myFoodStateFoodGroup, foodGroupReq }) => {
    let totalFoodGroupQuantity = 0
    if (myFoodStateFoodGroup.length > 0) {
        totalFoodGroupQuantity = myFoodStateFoodGroup
            .map(food => food.servings())
            .reduce((prev, cur) => prev + cur, 0)
    }

    return (
        <>
            <Text fontWeight={'semibold'} size='sm'>{foodGroupToDisplayName[foodGroupReq.group]}</Text>
            <Text mb={2}>{totalFoodGroupQuantity} of {Math.round(foodGroupReq.req * 100) / 100}</Text>
        </>
    )
};


export const Log = ({ myFoodState, setMyFoodState, calNeeds }) => {
    const req = getReq(calNeeds)
    console.log(req);
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
                <Divider />
                <Box>
                    <Heading mb={2} size={'md'}>
                        Summary
                    </Heading>
                    {req.map(r => {
                        const myFoodStateFoodGroup = myFoodState.filter(food => food.group === r.group)
                        return <Req key={r.group} myFoodStateFoodGroup={myFoodStateFoodGroup} foodGroupReq={r} />
                    })}
                </Box>
            </Stack>
        </>
    )
}
