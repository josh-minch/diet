import React from 'react'
import {
    Box,
    Divider,
    Heading,
    Spacer,
    HStack,
    Text,
    Stack,
    Button,
    Collapse,
    Flex,
} from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { FoodItem } from './FoodItem'
import {
    getPattern,
    foodGroupToDisplayName,
    vegGroups,
    grainsGroups,
    proteinGroups
} from '../patterns/patterns'

const CollapsableFoodGroupProgress = ({ foodGroupStates, foodGroupPatterns }) => {
    const [show, setShow] = React.useState(false)
    const onToggle = () => setShow(!show)

    const headerPattern = foodGroupPatterns[0]
    const subGroupPatterns = foodGroupPatterns.slice(1,)

    let totalHeaderQuantity = 0
    if (foodGroupStates.length > 0) {
        totalHeaderQuantity = foodGroupStates
            .map(food => food.servings())
            .reduce((prev, cur) => prev + cur, 0)
    }

    console.log('foodGroupStates', foodGroupStates.slice(1,));
    return (
        <>
            <FoodGroupProgressHeader totalFoodGroupQuantity={totalHeaderQuantity} foodGroupPattern={headerPattern} show={show} onToggle={onToggle} />
            <Collapse in={show} animateOpacity>
                {
                    subGroupPatterns.map((subGroupPattern, i) => {
                        const foodGroupState = foodGroupStates.filter(food => food.group === subGroupPattern.group)
                        return <FoodGroupProgress key={subGroupPattern.group} foodGroupState={foodGroupState} foodGroupPattern={subGroupPattern} />
                    }
                    )
                }
            </Collapse>
        </>
    )
}

const FoodGroupProgressHeader = ({ totalFoodGroupQuantity, foodGroupPattern, show, onToggle }) => {
    const roundedPatternValue = Math.round(foodGroupPattern.value * 100) / 100

    const boxWidth = 40
    const boxHeight = 10
    const boxSpacing = '5px'
    const boxColor = totalFoodGroupQuantity >= roundedPatternValue ? 'green.600' : 'gray.500'
    const textColor = totalFoodGroupQuantity >= roundedPatternValue ? 'green.700' : ''
    const fontWeight = totalFoodGroupQuantity >= roundedPatternValue ? 'semibold' : 'semibold'

    const numEmptyWholeBoxes = Math.floor(roundedPatternValue)
    const partialEmptyBoxWidth = (roundedPatternValue - Math.floor(roundedPatternValue)) * boxWidth

    const numWholeBoxes = Math.floor(totalFoodGroupQuantity)
    const partialBoxProgressValue = boxWidth * (totalFoodGroupQuantity - Math.floor(totalFoodGroupQuantity))

    return (
        <Box mb={4} >
            <Flex alignItems={'end'}>
                <Text fontWeight='semibold'>{foodGroupToDisplayName[foodGroupPattern.group]}</Text>
                <Spacer />
                <Button
                    onClick={onToggle}
                    colorScheme='red'
                    color='brand.100'
                    size='sm'
                    pr={1}
                    variant='ghost'
                    rightIcon={show ? <ChevronUpIcon w={4} h={4} /> : <ChevronDownIcon w={4} h={4} />}>
                    Show {show ? 'Less' : 'Details'}
                </Button>
            </Flex>

            <HStack mb={1} spacing='5px' fontVariant='tabularNums' color={textColor} align='baseline'>
                <Text fontWeight={fontWeight}>{totalFoodGroupQuantity}</Text>
                <Text letterSpacing={'-0.4px'} fontSize='13px'>of</Text>
                <Text fontWeight={fontWeight}>{roundedPatternValue}</Text>
            </HStack>
            {
                ['oils', 'discret', 'discretPercent'].includes(foodGroupPattern.group) === false &&
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
    )
};

const FoodGroupProgress = ({ foodGroupState, foodGroupPattern }) => {
    let totalFoodGroupQuantity = 0
    if (foodGroupState.length > 0) {
        totalFoodGroupQuantity = foodGroupState
            .map(food => food.servings())
            .reduce((prev, cur) => prev + cur, 0)
    }
    const roundedPatternValue = Math.round(foodGroupPattern.value * 100) / 100

    const boxWidth = 40
    const boxHeight = 10
    const boxSpacing = '5px'
    const boxColor = totalFoodGroupQuantity >= roundedPatternValue ? 'green.600' : 'gray.500'
    const textColor = totalFoodGroupQuantity >= roundedPatternValue ? 'green.700' : ''
    const fontWeight = totalFoodGroupQuantity >= roundedPatternValue ? 'semibold' : 'semibold'

    const numEmptyWholeBoxes = Math.floor(roundedPatternValue)
    const partialEmptyBoxWidth = (roundedPatternValue - Math.floor(roundedPatternValue)) * boxWidth

    const numWholeBoxes = Math.floor(totalFoodGroupQuantity)
    const partialBoxProgressValue = boxWidth * (totalFoodGroupQuantity - Math.floor(totalFoodGroupQuantity))

    return (
        <Box mb={4} >
            <Text >{foodGroupToDisplayName[foodGroupPattern.group]}</Text>
            <HStack mb={1} spacing='5px' fontVariant='tabularNums' color={textColor} align='baseline'>
                <Text fontWeight={fontWeight}>{totalFoodGroupQuantity}</Text>
                <Text letterSpacing={'-0.4px'} fontSize='13px'>of</Text>
                <Text fontWeight={fontWeight}>{roundedPatternValue}</Text>
            </HStack>
            {
                ['oils', 'discret', 'discretPercent'].includes(foodGroupPattern.group) === false &&
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
    )
};


export const Log = ({ myFoodState, setMyFoodState, calNeeds }) => {
    const myVegState = myFoodState.filter(food => vegGroups.includes(food.group))
    const myFruitState = myFoodState.filter(food => food.group === 'fruit')
    const myGrainsState = myFoodState.filter(food => grainsGroups.includes(food.group))
    const myDairyState = myFoodState.filter(food => food.group === 'dairy')
    const myProteinState = myFoodState.filter(food => proteinGroups.includes(food.group))

    const dietPattern = getPattern(calNeeds)
    const vegPattern = dietPattern.filter(p => vegGroups.includes(p.group))
    const fruitPattern = dietPattern.filter(p => p.group === 'fruit')[0]
    const grainsPattern = dietPattern.filter(p => grainsGroups.includes(p.group))
    const dairyPattern = dietPattern.filter(p => p.group === 'dairy')[0]
    const proteinPattern = dietPattern.filter(p => proteinGroups.includes(p.group))

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
                    <CollapsableFoodGroupProgress foodGroupStates={myVegState} foodGroupPatterns={vegPattern} />
                    <FoodGroupProgress foodGroupState={myFruitState} foodGroupPattern={fruitPattern} />
                    <CollapsableFoodGroupProgress foodGroupStates={myGrainsState} foodGroupPatterns={grainsPattern} />
                    <FoodGroupProgress foodGroupState={myDairyState} foodGroupPattern={dairyPattern} />
                    <CollapsableFoodGroupProgress foodGroupStates={myProteinState} foodGroupPatterns={proteinPattern} />
                </Box>
            </Stack>
        </Box>
    )
}
