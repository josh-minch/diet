import React from 'react'
import {
    Button,

    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
} from '@chakra-ui/react'
import { nanoid } from 'nanoid';

import { foodData } from '../foodData/foodData';
import { getServingConversionFactor } from '../req/req';


const createFoodItem = (name, unit = 'cup') => {
    return {
        name: name,
        group: foodData[name].group,
        quantity: 1 / getServingConversionFactor(name),
        unit: unit,
        servings: function () {
            return getServingConversionFactor(this.name) * this.quantity
        },
        id: nanoid()
    }
}

export const AddFoodButton = ({ foodName, setMyFoodState, id }) => {
    const onClick = React.useCallback(() => {
        setMyFoodState(myFoodState => myFoodState.concat(createFoodItem(foodName)))
    }, [foodName, setMyFoodState,])

    return (
        <Popover>

            <PopoverTrigger>
                <Button size={'sm'} foodame={foodName}>
                    {foodName}
                </Button>
            </PopoverTrigger>

            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>{foodName}</PopoverHeader>
                <PopoverBody><Button onClick={onClick} variant='outline' colorScheme='blue'>Add to Log</Button></PopoverBody>
            </PopoverContent>

        </Popover >

    )
}
