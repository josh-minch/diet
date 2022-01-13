import React from 'react'
import { Checkbox, CheckboxGroup, Heading, Collapse, Button, Box, Flex, Spacer, Center } from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

import { veg } from '../food_grps/veg'
import { fruit } from '../food_grps/fruit'
import { whole, refined } from '../food_grps/grains'


const FoodCheckBox = ({ food }) => {
    return (
        <Checkbox spacing={1} mr={3}>{food}</Checkbox>
    )
}

const FoodGroup = ({ foods, groupName, headerSize }) => {
    const [show, setShow] = React.useState(false)
    const handleToggle = () => setShow(!show)
    const transitionDuration = 0.15
    return (
        <Box
            mt={2}
            p={2}
            pt={1}
            boxShadow='base'
            rounded='md'
            bg='white'
        >
            <Flex >
                <Center>
                    <Box ml={1}>
                        <Heading size={headerSize} as={headerSize === 'md' ? 'h4' : 'h5'} >{groupName}</Heading>
                    </Box>
                </Center>

                <Spacer />
                <Button size='sm' onClick={handleToggle} mt={0.5} pr={1} variant='ghost'
                    rightIcon={show ? <ChevronUpIcon w={4} h={4} /> : <ChevronDownIcon w={4} h={4} />} >
                    Show {show ? 'less' : 'all'}
                </Button>
            </Flex>

            <Collapse
                transition={{ enter: { duration: transitionDuration }, exit: { duration: transitionDuration } }}
                startingHeight={70} in={show}
            >
                <Box ml={1}>
                    <CheckboxGroup >
                        {foods.map(food => <FoodCheckBox food={food} />)}
                    </CheckboxGroup>
                </Box>
            </Collapse>

        </Box>
    )
}

FoodGroup.defaultProps = {
    headerSize: 'md'
}

export const FoodSelect = () => {
    return (
        <Box bg='white'>
            <Heading as='h4' size='md' ml={1}>Vegetables</Heading>
            {
                veg.map(group =>
                    <FoodGroup foods={group.foods} groupName={group.name} headerSize={'sm'} />
                )
            }

            <FoodGroup foods={fruit} groupName="Fruits" />

            <Heading as='h4' size='md' ml={1}>Grains</Heading>
            <FoodGroup foods={whole} groupName="Whole Grains" headerSize={'sm'} />
            <FoodGroup foods={refined} groupName="Refined Grains" headerSize={'sm'} />

        </Box >
    )
}
