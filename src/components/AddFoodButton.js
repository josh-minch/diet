import React from 'react'
import { Button } from '@chakra-ui/react'

export const AddFoodButton = ({ foodName, id, onFoodClicked }) => {
    return (
        <Button size={'md'} variant={'outline'} id={id} onClick={(e) => onFoodClicked(e, foodName)}>
            {foodName}
        </Button>
    )
}
