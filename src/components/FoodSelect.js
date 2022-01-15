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


export const FoodSelect = ({ checkedState, onFoodChecked }) => {
    let i = 0
    return (
        <Box ml={3} maxW='400px' h='92vh' overflowY='scroll'>
            <Heading as='h4' size='md' mt={2} ml={0}>Vegetables</Heading>
            {veg.map((foodGroup) =>
                <FoodGroup
                    foods={foodGroup.foods}
                    groupName={foodGroup.name}
                    headerSize={'sm'}
                    key={i++}
                    checkedState={checkedState}
                    onFoodChecked={onFoodChecked}
                />
            )}
            <Divider mt={2} />

            <FoodGroup foods={fruit} groupName="Fruits" checkedState={checkedState} onFoodChecked={onFoodChecked} />
            <Divider mt={2} />

            <Heading as='h4' size='md' mt={2} ml={0}>Grains</Heading>
            <FoodGroup
                foods={whole}
                groupName="Whole Grains"
                headerSize={'sm'}
                checkedState={checkedState}
                onFoodChecked={onFoodChecked}
            />
            <FoodGroup
                foods={refined}
                groupName="Refined Grains"
                headerSize={'sm'}
                isCollapsable={false}
                checkedState={checkedState}
                onFoodChecked={onFoodChecked}
            />
            <Divider mt={2} />

            <FoodGroup foods={dairy} groupName="Dairy" checkedState={checkedState} onFoodChecked={onFoodChecked} />
            <Divider mt={2} />

            <Heading as='h4' size='md' mt={2} ml={0}>Protein</Heading>
            {protein.map((group) =>
                <FoodGroup
                    foods={group.foods}
                    groupName={group.name}
                    headerSize={'sm'}
                    key={i++}
                    checkedState={checkedState}
                    onFoodChecked={onFoodChecked}
                />
            )}
        </Box >
    )
}
