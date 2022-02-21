import React from 'react'
import {
    Divider
} from '@chakra-ui/react'
import { FoodGroup } from './FoodGroup'


export const DairyGroup = ({ foodCheckedState, onFoodClicked }) => {
    return (
        <>
            <FoodGroup
                foodGroup={'dairy'}
                foodGroupDisplayName={'Dairy'}
                headingSize={'md'}
                foodCheckedState={foodCheckedState}
                onFoodClicked={onFoodClicked} />
            <Divider mt={4} mb={1} />
        </>
    )
}
