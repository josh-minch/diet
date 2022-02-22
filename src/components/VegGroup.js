import React from 'react'
import {
    Heading,
    Divider,
    Box
} from '@chakra-ui/react'
import { FoodGroup } from './FoodGroup'

export const VegGroup = ({ foodCheckedState, setMyFoodState }) => {
    return (
        <Box>
            <Heading size='md' mt={2} ml={1}>Vegetables</Heading>
            <FoodGroup
                foodGroup={'green'}
                foodGroupDisplayName={'Dark Green Vegetables'}
                foodCheckedState={foodCheckedState}
                setMyFoodState={setMyFoodState} />
            <FoodGroup
                foodGroup={'red'}
                foodGroupDisplayName={'Red and Orange Vegetables'}
                foodCheckedState={foodCheckedState}
                setMyFoodState={setMyFoodState} />
            <FoodGroup
                foodGroup={'bean'}
                foodGroupDisplayName={'Beans, Peas, and Lentils'}
                foodCheckedState={foodCheckedState}
                setMyFoodState={setMyFoodState} />
            <FoodGroup
                foodGroup={'starchy'}
                foodGroupDisplayName={'Starchy Vegetables'}
                foodCheckedState={foodCheckedState}
                setMyFoodState={setMyFoodState} />
            <FoodGroup
                foodGroup={'other'}
                foodGroupDisplayName={'Other Vegetables'}
                foodCheckedState={foodCheckedState}
                setMyFoodState={setMyFoodState} />
            <Divider mt={4} mb={1} />
        </Box>
    )
}
