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


const ShowAllButton = React.memo(({ handleToggle, show }) => {
    return <Button colorScheme='red' size='sm' onClick={handleToggle} pr={1} variant='ghost'
        rightIcon={show ? <ChevronUpIcon w={4} h={4} /> : <ChevronDownIcon w={4} h={4} />}>
        Show {show ? 'Less' : 'All'}
    </Button>
})

const ShowAllIconButton = React.memo(({ handleToggle, show }) => {
    return <IconButton colorScheme='red' size='sm' w={20} h={6} onClick={handleToggle} variant='ghost' _focus={{ boxShadow: "none", }}
        icon={show ? <ChevronUpIcon w={4} h={4} /> : <ChevronDownIcon w={4} h={4} />}>
    </IconButton>
})


export const FoodGroup = React.memo(({ foodGroup, foodGroupDisplayName, headingSize, foodCheckedState, onFoodChecked }) => {
    const [show, setShow] = React.useState(false)
    const handleToggle = React.useCallback(() => setShow(show => !show), [])
    const transitionDuration = 0.15

    Object.filter = (obj, predicate) =>
        Object.fromEntries(Object.entries(obj).filter(predicate))

    return (
        <Box mb={0}>
            <Flex alignItems={'end'} ml={1}>
                <Heading mb={1} size={headingSize} fontWeight={headingSize === 'sm' ? '600' : '700'}>{foodGroupDisplayName}</Heading >
                <Spacer />
                <ShowAllButton handleToggle={handleToggle} show={show} />
            </Flex>
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
            <Center>
                <ShowAllIconButton handleToggle={handleToggle} show={show} />
            </Center>
        </Box>
    )
})

FoodGroup.defaultProps = {
    headingSize: 'sm'
}
