import React from 'react'
import {
    Divider
} from '@chakra-ui/react'
import { FoodGroup } from './FoodGroup'


export const DairyGroup = ({ foodCheckedState, onFoodChecked }) => {
    return (
        <>
            <FoodGroup
                foodGroup={'dairy'}
                foodGroupDisplayName={'Dairy'}
                headingSize={'md'}
                foodCheckedState={foodCheckedState}
                onFoodChecked={onFoodChecked} />
            <Divider mt={4} mb={1} />
        </>
    )
}
