import React from 'react'
import {
    Heading,
    Collapse,
    Button,
    Box,
    Flex,
    Spacer,
    Center,
    IconButton,
    Wrap,
    WrapItem
} from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { foodData } from '../foodData/foodData';
import { AddFoodButton } from './AddFoodButton';



const FoodGroupHeader = ({ headingSize, foodGroupDisplayName, handleToggle, show }) => {
    return (
        <Flex alignItems={'end'} ml={1}>
            <Heading mb={1} size={headingSize} fontWeight={headingSize === 'sm' ? '600' : '700'}>{foodGroupDisplayName}</Heading>
            <Spacer />
            <Button
                colorScheme='red'
                color='brand.100'
                size='sm'
                onClick={handleToggle}
                pr={1}
                variant='ghost'
                rightIcon={show ? <ChevronUpIcon w={4} h={4} /> : <ChevronDownIcon w={4} h={4} />}>
                Show {show ? 'Less' : 'All'}
            </Button>
        </Flex>
    )
}

const ShowAllIconButton = ({ handleToggle, show }) => {
    return (
        <Center>
            <IconButton colorScheme='red' color='brand.100' size='sm' w={20} h={8} onClick={handleToggle} variant='ghost'
                icon={show ? <ChevronUpIcon w={4} h={4} /> : <ChevronDownIcon w={4} h={4} />}>
            </IconButton>
        </Center>
    )
}

const transitionDuration = 0.15
const collapseStartingHeight = 160

const CollapsableFoodGroupContent = ({ foodGroup, show, setMyFoodState }) => {
    return (
        <Collapse
            transition={{ enter: { duration: transitionDuration }, exit: { duration: transitionDuration } }}
            startingHeight={collapseStartingHeight}
            in={show}
        >
            <Wrap mt={2}>
                {
                    Object.values(foodData)
                        .filter(food => food.group === foodGroup)
                        .map(({ foodName, id }) =>
                            <AddFoodButton
                                foodName={foodName}
                                setMyFoodState={setMyFoodState}
                                id={id}
                                key={id}
                            />
                        )
                }
            </Wrap>
        </Collapse>
    )
}

export const FoodGroup = ({ foodGroup, foodGroupDisplayName, headingSize, setMyFoodState }) => {
    const [show, setShow] = React.useState(false)
    const handleToggle = React.useCallback(() => setShow(show => !show), [])

    return (
        <Box mb={0}>
            <FoodGroupHeader headingSize={headingSize} foodGroupDisplayName={foodGroupDisplayName} handleToggle={handleToggle} show={show} />
            <CollapsableFoodGroupContent foodGroup={foodGroup} show={show} setMyFoodState={setMyFoodState} />
            <ShowAllIconButton handleToggle={handleToggle} show={show} />
        </Box>
    )
}

FoodGroup.defaultProps = {
    headingSize: 'sm'
}
