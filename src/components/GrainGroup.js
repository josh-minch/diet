import React from 'react'
import {
    Heading,
    Divider
} from '@chakra-ui/react'
import { FoodGroup } from './FoodGroup'

export const GrainGroup = ({ foodCheckedState, onFoodChecked }) => {
    return (
        <>
            <Heading as='h4' size='md' mt={2} ml={1}>Grains</Heading>
            <FoodGroup
                foodGroup={'whole'}
                foodGroupDisplayName={'Whole Grains'}
                foodCheckedState={foodCheckedState}
                onFoodChecked={onFoodChecked} />
            <FoodGroup
                foodGroup={'refined'}
                foodGroupDisplayName={'Refined Grains'}
                foodCheckedState={foodCheckedState}
                onFoodChecked={onFoodChecked} />
            <Divider mt={4} mb={1} />
        </>
    )
}
