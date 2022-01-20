import React from 'react'
import {
    Box,
    Heading,
    HStack,
    IconButton,
    Input,
    Text,
    Select,
    useNumberInput
} from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
export const Log = ({ myFoodState }) => {
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
            step: 0.5,
            defaultValue: 1,
            min: 0,
            max: 10,
            precision: 1,
        })

    const dec = getDecrementButtonProps()
    const input = getInputProps()
    const inc = getIncrementButtonProps()

    console.log(input);
    return (
        <Box>
            {myFoodState.map(food =>
                <Box key={food.id} >
                    <Heading fontWeight='semibold' size='sm'>{food.name}</Heading>
                    <Text>{food.group}</Text>
                    <HStack maxW='320px'>
                        <IconButton variant='outline' icon={< MinusIcon boxSize={3} />} {...dec}>-</IconButton>
                        <Input w='80px' textAlign='center' {...input} />
                        <Select />
                        <IconButton variant='outline' icon={< AddIcon boxSize={3} />} {...inc}>+</IconButton>
                    </HStack>
                </Box>
            )
            }
        </Box >
    )
}
