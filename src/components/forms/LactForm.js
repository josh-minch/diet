import React from 'react'
import {
    RadioGroup,
    Radio,
    VStack,
    Checkbox,
    Stack
} from '@chakra-ui/react'

export const LactForm = ({ marginLeft }) => {
    const [lactValue, setLactValue] = React.useState()
    const [radioDisabled, setRadioDisabled] = React.useState(true)

    const handleLactCheck = (e) => {
        const lactChecked = e.target.checked
        if (!lactChecked) {
            setLactValue('')
        }
        setRadioDisabled(!lactChecked)
    }

    return (
        <VStack mt={4} align='left'>
            <Checkbox value='lact' onChange={(e) => handleLactCheck(e)}>Breastfeeding</Checkbox>
            <RadioGroup onChange={setLactValue} value={lactValue}>
                <Stack ml={marginLeft} direction='column'>
                    <Radio value='lactValue0' isDisabled={radioDisabled}>0–6 months</Radio>
                    <Radio value='lactValue1' isDisabled={radioDisabled}>6+ months</Radio>
                </Stack>
            </RadioGroup>
        </VStack>
    )
}
