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
} from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { FoodCheckBox } from './FoodCheckBox'
import { foodData } from '../foodData/foodData';
import { AddFoodButton } from './AddFoodButton';

const FoodGroupHeader = React.memo(({ headingSize, foodGroupDisplayName, handleToggle, show }) => {
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
})

const ShowAllIconButton = React.memo(({ handleToggle, show }) => {
    return (
        <Center>
            <IconButton colorScheme='red' color='brand.100' size='sm' w={20} h={8} onClick={handleToggle} variant='ghost'
                icon={show ? <ChevronUpIcon w={4} h={4} /> : <ChevronDownIcon w={4} h={4} />}>
            </IconButton>
        </Center>
    )
})

const transitionDuration = 0.15

const CollapsableFoodGroupContent = React.memo(({ foodGroup, show, onFoodClicked }) => {
    return (
        <Collapse
            transition={{ enter: { duration: transitionDuration }, exit: { duration: transitionDuration } }}
            startingHeight={95}
            in={show}
            ml={1}
        >
            <Box ml={1}>
                {
                    Object.values(foodData)
                        .filter(food => food.group === foodGroup)
                        .map(({ foodName, id }) =>
                            <AddFoodButton
                                foodName={foodName}
                                onFoodClicked={onFoodClicked}
                                key={id}
                                id={id}
                            />
                        )
                }
            </Box>
        </Collapse>
    )
})

export const FoodGroup = React.memo(({ foodGroup, foodGroupDisplayName, headingSize, foodCheckedState, onFoodClicked }) => {
    const [show, setShow] = React.useState(false)
    const handleToggle = React.useCallback(() => setShow(show => !show), [])

    return (
        <Box mb={0}>
            <FoodGroupHeader headingSize={headingSize} foodGroupDisplayName={foodGroupDisplayName} handleToggle={handleToggle} show={show} />
            <CollapsableFoodGroupContent foodGroup={foodGroup} show={show} foodCheckedState={foodCheckedState} onFoodClicked={onFoodClicked} />
            <ShowAllIconButton handleToggle={handleToggle} show={show} />
        </Box>
    )
})

FoodGroup.defaultProps = {
    headingSize: 'sm'
}
