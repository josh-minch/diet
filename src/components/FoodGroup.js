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


export const FoodGroup = ({ foodGroup, foodGroupDisplayName, headingSize, foodCheckedState, onFoodChecked }) => {
    const [show, setShow] = React.useState(false)
    const handleToggle = () => setShow(!show)
    const transitionDuration = 0.15
    return (
        <Box mb={0}>
            <Flex alignItems={'end'} ml={1}>
                <Heading mb={1} size={headingSize} fontWeight={headingSize === 'sm' ? '600' : '700'}>{foodGroupDisplayName}</Heading >
                <Spacer />
                <Button colorScheme='red' size='sm' onClick={handleToggle} pr={1} variant='ghost'
                    rightIcon={show ? <ChevronUpIcon w={4} h={4} /> : <ChevronDownIcon w={4} h={4} />} >
                    Show {show ? 'Less' : 'All'}
                </Button>
            </Flex>
            <Collapse
                transition={{ enter: { duration: transitionDuration }, exit: { duration: transitionDuration } }}
                startingHeight={95}
                in={show}
                ml={1}
            >
                <Box ml={1}>
                    {
                        foodCheckedState
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
                <IconButton colorScheme='red' size='sm' w={20} h={6} onClick={handleToggle} variant='ghost' _focus={{ boxShadow: "none", }}
                    icon={show ? <ChevronUpIcon w={4} h={4} /> : <ChevronDownIcon w={4} h={4} />} >
                </IconButton>
            </Center>
        </Box>
    )
}

FoodGroup.defaultProps = {
    headingSize: 'sm'
}