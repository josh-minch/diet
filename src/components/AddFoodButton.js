import React from 'react'
import {
    Button,

} from '@chakra-ui/react'



export const AddFoodButton = React.memo(({ foodName, openModal }) => {
    const onClick = (e) => openModal(e, foodName)
    return (
        <>
            <Button size={'sm'} foodame={foodName} onClick={onClick}>
                {foodName}
            </Button>
        </>
    )
})
