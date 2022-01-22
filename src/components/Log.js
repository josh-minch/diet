import React from 'react'
import {
    Box,
    Heading,
    Spacer,
    Stack,
    Text
} from '@chakra-ui/react'
import { FoodItem } from './FoodItem'
import { FoodGroup } from './FoodGroup'
import { req } from '../req/req'



const Req = ({ myFoodStateFoodGroup, foodGroupReq }) => {
    let totalFoodGroupQuantity = 0
    if (myFoodStateFoodGroup.length > 0) {
        totalFoodGroupQuantity = myFoodStateFoodGroup
            .map(food => food.servings())
            .reduce((prev, cur) => prev + cur, 0)
    }

    return (
        <>
            <Heading size='sm'>{foodGroupReq.group}</Heading>
            <Text>{totalFoodGroupQuantity} / {foodGroupReq.req}</Text>
        </>
    )
};


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
                    {req.map(r => {
                        const myFoodStateFoodGroup = myFoodState.filter(food => food.group === r.group)
                        return <Req key={r.group} myFoodStateFoodGroup={myFoodStateFoodGroup} foodGroupReq={r} />
                    })}

                    {/* {myFoodState
                        .filter(food => food.group === 'green')
                        .map(food => food.quantity)
                        .reduce(
                            (prev, cur) => prev + cur,
                            0
                        )
                    } */}
                </Box>
            </Stack>
        </>
    )
}
