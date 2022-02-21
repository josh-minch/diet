import React from 'react'
import {
    Heading,
    Divider
} from '@chakra-ui/react'
import { FoodGroup } from './FoodGroup'

export const GrainGroup = ({ foodCheckedState, onFoodClicked }) => {
    return (
        <>
            <Heading size='md' mt={2} ml={1}>Grains</Heading>
            <FoodGroup
                foodGroup={'whole'}
                foodGroupDisplayName={'Whole Grains'}
                foodCheckedState={foodCheckedState}
                onFoodClicked={onFoodClicked} />
            <FoodGroup
                foodGroup={'refined'}
                foodGroupDisplayName={'Refined Grains'}
                foodCheckedState={foodCheckedState}
                onFoodClicked={onFoodClicked} />
            <Divider mt={4} mb={1} />
        </>
    )
}
