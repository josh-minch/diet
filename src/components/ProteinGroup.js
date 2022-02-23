import React from 'react'
import {
    Heading,
} from '@chakra-ui/react'
import { FoodGroup } from './FoodGroup'

export const ProteinGroup = ({ openModal }) => {
    return (
        <>
            <Heading size='md' mt={2} ml={1}>Protein Foods</Heading>
            <FoodGroup
                foodGroup={'meats'}
                foodGroupDisplayName={'Meats, Poultry, and Eggs'}
                openModal={openModal} />
            <FoodGroup
                foodGroup={'seafood'}
                foodGroupDisplayName={'Seafood (Low in Mercury)'}
                openModal={openModal} />
            <FoodGroup
                foodGroup={'nuts'}
                foodGroupDisplayName={'Nuts, Seeds, and Soy Products'}
                openModal={openModal} />
        </>
    )
}
