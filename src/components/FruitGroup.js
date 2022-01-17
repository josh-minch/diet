import React from 'react'
import {
    Divider
} from '@chakra-ui/react'
import { FoodGroup } from './FoodGroup'


export const FruitGroup = ({ foodCheckedState, onFoodChecked }) => {
    return (
        <>
            <FoodGroup
                foodGroup={'fruit'}
                foodGroupDisplayName={'Fruit'}
                headingSize={'md'}
                foodCheckedState={foodCheckedState}
                onFoodChecked={onFoodChecked} />
            <Divider mt={4} mb={1} />
        </>
    )
}
