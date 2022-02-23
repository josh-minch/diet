import React from 'react'
import {
    Heading,
    Divider,
    Box
} from '@chakra-ui/react'
import { FoodGroup } from './FoodGroup'

export const VegGroup = React.memo(({ openModal }) => {
    return (
        <Box>
            <Heading size='md' mt={2} ml={1}>Vegetables</Heading>
            <FoodGroup
                foodGroup={'green'}
                foodGroupDisplayName={'Dark Green Vegetables'}
                openModal={openModal}
            />
            <FoodGroup
                foodGroup={'red'}
                foodGroupDisplayName={'Red and Orange Vegetables'}
                openModal={openModal} />
            <FoodGroup
                foodGroup={'bean'}
                foodGroupDisplayName={'Beans, Peas, and Lentils'}
                openModal={openModal} />
            <FoodGroup
                foodGroup={'starchy'}
                foodGroupDisplayName={'Starchy Vegetables'}
                openModal={openModal} />
            <FoodGroup
                foodGroup={'other'}
                foodGroupDisplayName={'Other Vegetables'}
                openModal={openModal} />
            <Divider mt={4} mb={1} />
        </Box>
    )
})
