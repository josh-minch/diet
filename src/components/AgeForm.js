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

export const AgeForm = ({ ageUnit, setAge, setAgeUnit }) => {
    const [minAge, setMinAge] = React.useState(2)

    const handleAgeChange = e => {
        const inputtedAge = e.target.value
        let adjustedAge = e.target.value

        // If age is set below minimum of 2 for years or 12 for months,
        // then adjust it to these values
        if (ageUnit === 'years') {
            adjustedAge = Math.max(2, inputtedAge)
        } else if (ageUnit === 'months') {
            adjustedAge = Math.max(12, inputtedAge)
        }

        setAge(adjustedAge)
    }

    const handleUnitChange = (e) => {
        const selectedUnit = e.target.value
        setAgeUnit(selectedUnit)
        const newMinAge = selectedUnit === 'years' ? 2 : 12
        setMinAge(newMinAge)
    }

    return (
        <FormControl>
            <FormLabel htmlFor='age'>Age</FormLabel>
            <HStack spacing={2} >
                <NumberInput min={minAge}>
                    <NumberInputField onChange={handleAgeChange} id='age' />
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
