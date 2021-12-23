import { FormControl, FormLabel, Select } from '@chakra-ui/react'
import React from 'react'

export const ActivityForm = ({ setActivity }) => {
    const handleOnChange = (e) => {
        setActivity(e.target.value)
    }
    return (
        <FormControl>
            <FormLabel htmlFor='activity'>Activity Level</FormLabel>
            <Select onChange={handleOnChange} id='activity' >
                <option value='sed'>Sedentary</option>
                <option value='mod'>Moderately Active</option>
                <option value='act'>Active</option>
            </Select>
        </FormControl >
    )
}
