import React from 'react'
import {
    Divider
} from '@chakra-ui/react'
import { FoodGroup } from './FoodGroup'


export const DairyGroup = React.memo(({ setMyFoodState, openModal }) => {
    return (
        <>
            <FoodGroup
                foodGroup={'dairy'}
                foodGroupDisplayName={'Dairy'}
                headingSize={'md'}
                setMyFoodState={setMyFoodState}
                openModal={openModal} />
            <Divider mt={4} mb={1} />
        </>
    )
})
