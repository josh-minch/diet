import React from 'react'
import {
    Heading,
} from '@chakra-ui/react'
import { FoodGroup } from './FoodGroup'

export const ProteinGroup = ({ foodCheckedState, onFoodChecked }) => {
    return (
        <>
            <Heading as='h4' size='md' mt={2} ml={1}>Protein Foods</Heading>
            <FoodGroup
                foodGroup={'meats'}
                foodGroupDisplayName={'Meats, Poultry, and Eggs'}
                foodCheckedState={foodCheckedState}
                onFoodChecked={onFoodChecked} />
            <FoodGroup
                foodGroup={'seafood'}
                foodGroupDisplayName={'Seafood (Low in Mercury)'}
                foodCheckedState={foodCheckedState}
                onFoodChecked={onFoodChecked} />
            <FoodGroup
                foodGroup={'nuts'}
                foodGroupDisplayName={'Nuts, Seeds, and Soy Products'}
                foodCheckedState={foodCheckedState}
                onFoodChecked={onFoodChecked} />
        </>
    )
}
