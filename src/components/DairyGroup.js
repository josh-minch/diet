import React from 'react'
import {
    Divider
} from '@chakra-ui/react'
import { FoodGroup } from './FoodGroup'


export const DairyGroup = ({ foodCheckedState, setMyFoodState }) => {
    return (
        <>
            <FoodGroup
                foodGroup={'dairy'}
                foodGroupDisplayName={'Dairy'}
                headingSize={'md'}
                foodCheckedState={foodCheckedState}
                setMyFoodState={setMyFoodState} />
            <Divider mt={4} mb={1} />
        </>
    )
}
