import React from 'react'
import {
    Heading,
    Divider
} from '@chakra-ui/react'
import { FoodGroup } from './FoodGroup'

export const GrainGroup = React.memo(({ openModal }) => {
    return (
        <>
            <Heading size='md' mt={2} ml={1}>Grains</Heading>
            <FoodGroup
                foodGroup={'whole'}
                foodGroupDisplayName={'Whole Grains'}
                openModal={openModal} />
            <FoodGroup
                foodGroup={'refined'}
                foodGroupDisplayName={'Refined Grains'}
                openModal={openModal} />
            <Divider mt={4} mb={1} />
        </>
    )
})
