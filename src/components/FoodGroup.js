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

const FoodGroupHeader = React.memo(({ headingSize, foodGroupDisplayName, handleToggle, show }) => {
    return (
        <Flex alignItems={'end'} ml={1}>
            <Heading mb={1} size={headingSize} fontWeight={headingSize === 'sm' ? '600' : '700'}>{foodGroupDisplayName}</Heading>
            <Spacer />
            <Button colorScheme='red' size='sm' onClick={handleToggle} pr={1} variant='ghost'
                rightIcon={show ? <ChevronUpIcon w={4} h={4} /> : <ChevronDownIcon w={4} h={4} />}>
                Show {show ? 'Less' : 'All'}
            </Button>
        </Flex>
    )
})

const ShowAllIconButton = React.memo(({ handleToggle, show }) => {
    return (
        <Center>
            <IconButton colorScheme='red' size='sm' w={20} h={6} onClick={handleToggle} variant='ghost' _focus={{ boxShadow: "none", }}
                icon={show ? <ChevronUpIcon w={4} h={4} /> : <ChevronDownIcon w={4} h={4} />}>
            </IconButton>
        </Center>
    )
})

const CollapsableFoodGroupContent = React.memo(({ foodGroup, show, foodCheckedState, onFoodChecked }) => {
    const transitionDuration = 0.15
    return (
        <Collapse
            transition={{ enter: { duration: transitionDuration }, exit: { duration: transitionDuration } }}
            startingHeight={95}
            in={show}
            ml={1}
        >
            <Box ml={1}>
                {
                    Object.values(foodCheckedState)
                        .filter(food => food.group === foodGroup)
                        .map(({ foodName, id, isChecked }) =>
                            <FoodCheckBox
                                foodName={foodName}
                                ischecked={isChecked}
                                onFoodChecked={onFoodChecked}
                                key={id}
                                id={id}
                            />
                        )
                }
            </Box>
        </Collapse>
    )
})

export const FoodGroup = React.memo(({ foodGroup, foodGroupDisplayName, headingSize, foodCheckedState, onFoodChecked }) => {
    const [show, setShow] = React.useState(false)
    const handleToggle = React.useCallback(() => setShow(show => !show), [])

    return (
        <Box mb={0}>
            <FoodGroupHeader headingSize={headingSize} foodGroupDisplayName={foodGroupDisplayName} handleToggle={handleToggle} show={show} />
            <CollapsableFoodGroupContent foodGroup={foodGroup} show={show} foodCheckedState={foodCheckedState} onFoodChecked={onFoodChecked} />
            <ShowAllIconButton handleToggle={handleToggle} show={show} />
        </Box>
    )
})

FoodGroup.defaultProps = {
    headingSize: 'sm'
}
