import React from 'react'
import {
    Heading,
    Box,
    Divider,

} from '@chakra-ui/react'
import { FoodGroup } from './FoodGroup'

import { veg } from '../food_grps/veg'
import { fruit } from '../food_grps/fruit'
import { whole, refined } from '../food_grps/grains'
import { dairy } from '../food_grps/dairy'
import { protein } from '../food_grps/protein'


export const FoodSelect = () => {
    return (
        <Box ml={3} maxW='400px' h='92vh' overflowY='scroll'>
            <Heading as='h4' size='md' mt={2} ml={0}>Vegetables</Heading>
            {veg.map((foodGroup, index) =>
                <FoodGroup foods={foodGroup.foods} groupName={foodGroup.name} headerSize={'sm'} key={index} />
            )}
            <Divider mt={2} />

            <FoodGroup foods={fruit} groupName="Fruits" />
            <Divider mt={2} />

            <Heading as='h4' size='md' mt={2} ml={0}>Grains</Heading>
            <FoodGroup foods={whole} groupName="Whole Grains" headerSize={'sm'} />
            <FoodGroup foods={refined} groupName="Refined Grains" headerSize={'sm'} isCollapsable={false} />
            <Divider mt={2} />

            <FoodGroup foods={dairy} groupName="Dairy" />
            <Divider mt={2} />

            <Heading as='h4' size='md' mt={2} ml={0}>Protein</Heading>
            {protein.map((group, index) =>
                <FoodGroup foods={group.foods} groupName={group.name} headerSize={'sm'} key={index} />
            )}
        </Box >
    )
}
