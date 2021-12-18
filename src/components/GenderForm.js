import React from 'react'
import {
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    HStack,
    Collapse,
    VStack,
    useDisclosure,
    Checkbox,
    Stack
} from '@chakra-ui/react'


export const GenderForm = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [value, setValue] = React.useState()

    return (
        <FormControl as='fieldset'>
            <FormLabel as='legend'>Sex</FormLabel>
            <RadioGroup defaultValue='Itachi'>
                <HStack spacing={6}>
                    <Radio value='Female' onChange={onOpen}>Female</Radio>
                    <Radio value='Male' onChange={onClose}>Male</Radio>
                </HStack>
            </RadioGroup>
            <Collapse in={isOpen} animateOpacity>
                <VStack mt={2} align='left'>
                    <VStack align='left'>
                        <Checkbox value='Pregnant'>Pregnant</Checkbox>
                        <RadioGroup onChange={setValue} value={value}>
                            <Stack direction='row'>
                                <Radio value='firstTrimester' >1st trimester</Radio>
                                <Radio value='secondTrimester' >2nd trimester</Radio>
                                <Radio value='thirdTrimester' >3rd trimester</Radio>
                            </Stack>
                        </RadioGroup>
                    </VStack>
                    <VStack align='left'>
                        <Checkbox value='breastfeeding'>Breastfeeding</Checkbox>
                        <RadioGroup onChange={setValue} value={value}>
                            <Stack direction='row'>
                                <Radio value='firstTrimester' >1st trimester</Radio>
                                <Radio value='secondTrimester' >2nd trimester</Radio>
                                <Radio value='thirdTrimester' >3rd trimester</Radio>
                            </Stack>
                        </RadioGroup>
                    </VStack>
                </VStack>
            </Collapse>
        </FormControl >
    )
}

export default GenderForm