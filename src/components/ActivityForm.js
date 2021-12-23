import { FormControl, FormLabel, Select } from '@chakra-ui/react'
import React from 'react'

export const ActivityForm = () => {
    return (
        <FormControl>
            <FormLabel htmlFor='activity'>Activity Level</FormLabel>
            <Select id='activity'>
                <option>Sedentary</option>
                <option>Moderately Active</option>
                <option>Active</option>
            </Select>
        </FormControl >
    )
}
