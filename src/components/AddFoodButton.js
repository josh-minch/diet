import React from 'react'
import {
    Button,

} from '@chakra-ui/react'



export const AddFoodButton = ({ foodName, onOpen, setSelectedFood }) => {
    const onClick = (e, foodName) => {
        setSelectedFood(foodName)
        onOpen()
    }

    return (
        <>
            <Button size={'sm'} foodame={foodName} onClick={(e) => onClick(e, foodName)}>
                {foodName}
            </Button>
        </>
    )
}
