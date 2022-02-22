import React from 'react'
import {
    Heading,
} from '@chakra-ui/react'
import { FoodGroup } from './FoodGroup'

export const ProteinGroup = ({ foodCheckedState, setMyFoodState }) => {
    return (
        <>
            <Heading size='md' mt={2} ml={1}>Protein Foods</Heading>
            <FoodGroup
                foodGroup={'meats'}
                foodGroupDisplayName={'Meats, Poultry, and Eggs'}
                foodCheckedState={foodCheckedState}
                setMyFoodState={setMyFoodState} />
            <FoodGroup
                foodGroup={'seafood'}
                foodGroupDisplayName={'Seafood (Low in Mercury)'}
                foodCheckedState={foodCheckedState}
                setMyFoodState={setMyFoodState} />
            <FoodGroup
                foodGroup={'nuts'}
                foodGroupDisplayName={'Nuts, Seeds, and Soy Products'}
                foodCheckedState={foodCheckedState}
                setMyFoodState={setMyFoodState} />
        </>
    )
}
