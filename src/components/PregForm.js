import React from 'react'
import {
    RadioGroup,
    Radio,
    VStack,
    Checkbox,
    Stack
} from '@chakra-ui/react'

export const PregForm = () => {
    const [pregValue, setPregValue] = React.useState()
    const [radioDisabled, setRadioDisabled] = React.useState(true)

    const handlePregCheck = (e) => {
        const pregChecked = e.target.checked
        if (!pregChecked) {
            setPregValue('')
        }
        setRadioDisabled(!pregChecked)
    }

    return (
        <VStack mt={4} align='left'>
            <Checkbox value='pregnant' onChange={(e) => handlePregCheck(e)}>Pregnant</Checkbox>
            <RadioGroup onChange={setPregValue} value={pregValue}>
                <Stack direction='column'>
                    <Radio value='firstTrimester' isDisabled={radioDisabled}>1st trimester (0–13 weeks)</Radio>
                    <Radio value='secondTrimester' isDisabled={radioDisabled}>2nd trimester (13–27 weeks)</Radio>
                    <Radio value='thirdTrimester' isDisabled={radioDisabled}>3rd trimester (27+ weeks)</Radio>
                </Stack>
            </RadioGroup>
        </VStack >
    )
}

