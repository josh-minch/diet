import React from 'react'
import {
    Divider
} from '@chakra-ui/react'
import { FoodGroup } from './FoodGroup'


export const FruitGroup = React.memo(({ openModal }) => {
    return (
        <>
            <FoodGroup
                foodGroup={'fruit'}
                foodGroupDisplayName={'Fruit'}
                headingSize={'md'}
                openModal={openModal}
            />
            <Divider mt={4} mb={1} />
        </>
    )
})
