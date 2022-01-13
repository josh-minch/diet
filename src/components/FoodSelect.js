import React from 'react'
import {
    Checkbox,
    CheckboxGroup,
    Heading,
    Collapse,
    Button,
    Box, Flex,
    Spacer,
    Center,
    IconButton,
    Divider
} from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

import { veg } from '../food_grps/veg'
import { fruit } from '../food_grps/fruit'
import { whole, refined } from '../food_grps/grains'
import { dairy } from '../food_grps/dairy'
import { protein } from '../food_grps/protein'



const FoodCheckBox = ({ food }) => {
    return (
        <Checkbox h={8} spacing={1} mr={3}>{food}</Checkbox>
    )
}

const FoodGroup = ({ foods, groupName, headerSize, isCollapsable }) => {
    const [show, setShow] = React.useState(false)
    const handleToggle = () => setShow(!show)
    const transitionDuration = 0.15
    if (isCollapsable) {
        return (
            <Box
                mt={2}
            >
                <Flex >
                    <Center>
                        <Box ml={1}>
                            <Heading size={headerSize}
                                as={headerSize === 'md' ? 'h4' : 'h5'}
                                fontWeight={headerSize === 'md' ? '700' : '600'}>{groupName}</Heading>
                        </Box>
                    </Center>
                    <Spacer />
                    <Button colorScheme='red' size='sm' onClick={handleToggle} pr={1} variant='ghost'
                        rightIcon={show ? <ChevronUpIcon w={4} h={4} /> : <ChevronDownIcon w={4} h={4} />} >
                        Show {show ? 'Less' : 'All'}
                    </Button>
                </Flex>
                <Collapse
                    transition={{ enter: { duration: transitionDuration }, exit: { duration: transitionDuration } }}
                    startingHeight={72} in={show}
                >
                    <Box ml={1}>
                        <CheckboxGroup >
                            {foods.map(food => <FoodCheckBox food={food} />)}
                        </CheckboxGroup>
                    </Box>
                </Collapse>
                <Center>
                    <IconButton colorScheme='red' size='sm' w={20} onClick={handleToggle} variant='ghost' _focus={{ boxShadow: "none", }}
                        icon={show ? <ChevronUpIcon w={4} h={4} /> : <ChevronDownIcon w={4} h={4} />} >
                    </IconButton>
                </Center>
            </Box >
        )
    } else {
        return (
            <Box
                mt={2}
            >
                <Box ml={1}>
                    <Heading
                        size={headerSize}
                        as={headerSize === 'md' ? 'h4' : 'h5'}
                        fontWeight={headerSize === 'md' ? '700' : '600'} >{groupName}</Heading>
                </Box>
                <Box ml={1}>
                    <CheckboxGroup >
                        {foods.map(food => <FoodCheckBox food={food} />)}
                    </CheckboxGroup>
                </Box>
            </Box >
        )
    }
}

FoodGroup.defaultProps = {
    headerSize: 'md',
    isCollapsable: true
}

export const FoodSelect = () => {
    return (
        <Box bg='white'>
            <Heading as='h4' size='md' mt={2} ml={1}>Vegetables</Heading>
            {veg.map(foodGroup =>
                <FoodGroup foods={foodGroup.foods} groupName={foodGroup.name} headerSize={'sm'} />
            )}
            <Divider mt={2} />

            <FoodGroup foods={fruit} groupName="Fruits" />
            <Divider mt={2} />

            <Heading as='h4' size='md' mt={2} ml={1}>Grains</Heading>
            <FoodGroup foods={whole} groupName="Whole Grains" headerSize={'sm'} />
            <FoodGroup foods={refined} groupName="Refined Grains" headerSize={'sm'} isCollapsable={false} />
            <Divider mt={2} />

            <FoodGroup foods={dairy} groupName="Dairy" />
            <Divider mt={2} />

            <Heading as='h4' size='md' mt={2} ml={1}>Protein</Heading>
            {protein.map(group =>
                <FoodGroup foods={group.foods} groupName={group.name} headerSize={'sm'} />
            )}
        </Box >
    )
}
