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

const AGE_SELECTOR = {
    YEARS: 0,
    MONTHS: 1
}
let optionsState = AGE_SELECTOR.YEARS

export const AgeForm = () => {

    return (
        <FormControl>
            <FormLabel as='legend'>Age</FormLabel>
            <HStack spacing={2} >
                <NumberInput
                    min={0}
                    maxW={24}
                >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <Select width={28}>
                    <option value='years' selected>Years</option>
                    <option value='months'>Months</option>
                </Select>
            </HStack>

        </FormControl>
    )
}

export default AgeForm