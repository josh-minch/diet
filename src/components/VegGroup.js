import React from 'react'
import {
    Heading,
    Divider
} from '@chakra-ui/react'
import { FoodGroup } from './FoodGroup'

export const VegGroup = ({ foodCheckedState, onFoodChecked }) => {
    return (
        <>
            <Heading size='md' mt={2} ml={1}>Vegetables</Heading>
            <FoodGroup
                foodGroup={'green'}
                foodGroupDisplayName={'Dark Green Vegetables'}
                foodCheckedState={foodCheckedState}
                onFoodChecked={onFoodChecked} />
            <FoodGroup
                foodGroup={'red'}
                foodGroupDisplayName={'Red and Orange Vegetables'}
                foodCheckedState={foodCheckedState}
                onFoodChecked={onFoodChecked} />
            <FoodGroup
                foodGroup={'bean'}
                foodGroupDisplayName={'Beans, Peas, and Lentils'}
                foodCheckedState={foodCheckedState}
                onFoodChecked={onFoodChecked} />
            <FoodGroup
                foodGroup={'starchy'}
                foodGroupDisplayName={'Starchy vegetables'}
                foodCheckedState={foodCheckedState}
                onFoodChecked={onFoodChecked} />
            <FoodGroup
                foodGroup={'other'}
                foodGroupDisplayName={'Other vegetables'}
                foodCheckedState={foodCheckedState}
                onFoodChecked={onFoodChecked} />
            <Divider mt={4} mb={1} />
        </>
    )
}
