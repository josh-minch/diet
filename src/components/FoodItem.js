import React from 'react';
import {
    Heading,
    ButtonGroup,
    IconButton,
    NumberInput,
    NumberInputField,
    useNumberInput,
    HStack,
    Text,
    Select
} from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'

export const FoodItem = ({ food, setMyFoodState }) => {

    const stepSize = 0.25
    const minQuantity = 0

    const onFoodQuantityChanged = (foodId, newQuantity) => {
        setMyFoodState((myFoodState) => {
            return myFoodState.map(food => food.id === foodId ? { ...food, quantity: newQuantity } : food)
        })
    }

    const decrementQuantity = (foodId) => {
        setMyFoodState((myFoodState) => {
            return myFoodState.map(food => food.id === foodId ? { ...food, quantity: Number(food.quantity) - stepSize } : food)
        })
    }


    const incrementQuantity = (foodId) => {
        setMyFoodState((myFoodState) => {
            return myFoodState.map(food => food.id === foodId ? { ...food, quantity: Number(food.quantity) + stepSize } : food)
        })
    }

    return (
        < >
            <HStack>
                <Heading fontWeight='semibold' size='sm'>{food.name}</Heading>
                <Text>{food.group}</Text>
            </HStack>
            <HStack>
                <ButtonGroup isAttached>
                    <IconButton icon={< MinusIcon boxSize={3} />} isDisabled={food.quantity <= minQuantity} variant='outline' onClick={() => decrementQuantity(food.id)} />
                    <NumberInput
                        onChange={newQuantity => onFoodQuantityChanged(food.id, newQuantity)}
                        value={food.quantity}
                        id={food.id}
                        min={minQuantity}
                    >
                        <NumberInputField borderRadius={0} maxW='70px' textAlign='center' pe='10px' ps='10px' />
                    </NumberInput>
                    <IconButton icon={< AddIcon boxSize={3} />} variant='outline' onClick={() => incrementQuantity(food.id)} />
                </ButtonGroup>

                <Select maxW='100px' />
                <Text>{food.servings()}</Text>
            </HStack>
        </>
    )
};
