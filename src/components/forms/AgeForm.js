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

export const AgeForm = ({ age, ageUnit, setAge, setAgeUnit }) => {
    const [minAge, setMinAge] = React.useState(2)
    const [maxAge, setMaxAge] = React.useState(Infinity)

    const handleUnitChange = e => {
        const selectedUnit = e.target.value
        // Set minAge to between 2 and infinity for years, and 12 and 23 for months
        const minAge = selectedUnit === 'years' ? 2 : 12
        const maxAge = selectedUnit === 'years' ? Infinity : 23

        // Set age to within minAge and maxAge
        const adjustedAge = age < minAge ? Math.max(minAge, age) : Math.min(maxAge, age)

        setMinAge(minAge)
        setMaxAge(maxAge)
        setAge(adjustedAge)
        setAgeUnit(selectedUnit)
    }

    return (
        <FormControl>
            <FormLabel htmlFor='age'>Age</FormLabel>
            <HStack spacing={2} >
                <NumberInput value={age} onChange={setAge} min={minAge} max={maxAge}>
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
