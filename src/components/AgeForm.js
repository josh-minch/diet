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
import { render } from '@testing-library/react'

export const AgeForm = ({ age, ageUnit, setAge, setAgeUnit }) => {
    const [minAge, setMinAge] = React.useState(2)

    const handleUnitChange = e => {
        const selectedUnit = e.target.value
        setAgeUnit(selectedUnit)

        const minAge = selectedUnit === 'years' ? 2 : 12
        setMinAge(minAge)

        const adjustedAge = Math.max(minAge, age)
        setAge(adjustedAge)
    }

    return (
        <FormControl>
            <FormLabel htmlFor='age'>Age</FormLabel>
            <HStack spacing={2} >
                <NumberInput value={age} onChange={setAge} min={minAge}>
                    <NumberInputField id='age' />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <Select value={ageUnit} onChange={handleUnitChange}>
                    <option value='years'>Years</option>
                    <option value='months'>Months</option>
                </Select>
            </HStack>
        </FormControl >
    )
}
