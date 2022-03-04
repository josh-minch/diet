import React from 'react'
import {
    Box,
    Divider,
    Heading,
    Spacer,
    HStack,
    Text,
    Stack,
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
    const roundedReq = Math.round(foodGroupReq.req * 100) / 100

    const boxWidth = 40
    const boxHeight = 10
    const boxSpacing = '5px'
    const boxColor = totalFoodGroupQuantity >= roundedReq ? 'green.600' : 'gray.500'
    const textColor = totalFoodGroupQuantity >= roundedReq ? 'green.700' : ''
    const fontWeight = totalFoodGroupQuantity >= roundedReq ? 'semibold' : 'semibold'

    const numEmptyWholeBoxes = Math.floor(roundedReq)
    const partialEmptyBoxWidth = (roundedReq - Math.floor(roundedReq)) * boxWidth

    const numWholeBoxes = Math.floor(totalFoodGroupQuantity)
    const partialBoxProgressValue = boxWidth * (totalFoodGroupQuantity - Math.floor(totalFoodGroupQuantity))

    return (
        <>
            <Box mb={4} >
                <Text >{foodGroupToDisplayName[foodGroupReq.group]}</Text>
                <HStack mb={1} spacing='5px' fontVariant='tabularNums' color={textColor} align='baseline'>
                    <Text fontWeight={fontWeight}>{totalFoodGroupQuantity}</Text>
                    <Text letterSpacing={'-0.4px'} fontSize='13px'>of</Text>
                    <Text fontWeight={fontWeight}>{roundedReq}</Text>
                </HStack>
                {
                    ['oils', 'discret', 'discretPercent'].includes(foodGroupReq.group) === false &&
                    <>
                        <HStack position="absolute" spacing={boxSpacing}>
                            {numEmptyWholeBoxes && [...Array(numEmptyWholeBoxes)].map((value, index) => (
                                <Box borderRadius='sm' border='1px' borderColor={boxColor} bg='white' w={`${boxWidth}px`} h={`${boxHeight}px`} key={index}></Box>
                            ))}
                            {partialEmptyBoxWidth &&
                                <Box border='1px' borderColor={boxColor} borderRadius='sm' bg='white' width={`${partialEmptyBoxWidth}px`} h={`${boxHeight}px`} />
                            }
                        </HStack >
                        <HStack h={`${boxHeight}px`} position="relative" spacing={boxSpacing}>
                            {numWholeBoxes && [...Array(numWholeBoxes)].map((value, index) => (
                                <Box borderRadius='sm' bg={boxColor} w={`${boxWidth}px`} h={`${boxHeight}px`} key={index}></Box>
                            ))}
                            {partialBoxProgressValue > 0 &&
                                <Box border='1px' borderColor={boxColor} borderRadius='sm' bg={boxColor} width={`${partialBoxProgressValue}px`} h={`${boxHeight}px`} />
                            }
                        </HStack>
                    </>
                }

            </Box >
        </>
    )
};


export const Log = ({ myFoodState, setMyFoodState, calNeeds }) => {
    const req = getReq(calNeeds)
    return (
        <Box mt={4}>
            <Stack>
                <Box>
                    <Heading mb={2} size={'md'}>
                        Log
                    </Heading>
                    {myFoodState.length === 0 &&
                        <Text>Add some foods to get started :)</Text>
                    }
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
        </Box>
    )
}
