import React from 'react'
import {
    FormControl,
    FormLabel,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    HStack,
    Select
} from '@chakra-ui/react'

export const AgeForm = () => {
    const [minAge, setMinAge] = React.useState(2)

    const handleUnitChange = (e) => {
        const newMinAge = e.target.value === 'years' ? 2 : 12
        setMinAge(newMinAge)
    }

    return (
        <FormControl>
            <FormLabel htmlFor='age'>Age</FormLabel>
            <HStack spacing={2} >
                <NumberInput min={minAge}>
                    <NumberInputField id='age' />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <Select onChange={(e) => handleUnitChange(e)}>
                    <option value='years'>Years</option>
                    <option value='months'>Months</option>
                </Select>
            </HStack>
        </FormControl >
    )
}
