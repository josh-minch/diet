import React from 'react'
import {
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    HStack,
    Collapse,
    useDisclosure,
} from '@chakra-ui/react'
import { PregForm } from './PregForm'
import { LactForm } from './LactForm'


export const GenderForm = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <FormControl as='fieldset'>
            <FormLabel>Sex</FormLabel>
            <RadioGroup>
                <HStack spacing={6}>
                    <Radio value='female' onChange={onOpen}>Female</Radio>
                    <Radio value='male' onChange={onClose}>Male</Radio>
                </HStack>
            </RadioGroup>
            <Collapse in={isOpen} animateOpacity>
                <PregForm />
                <LactForm />
            </Collapse>
        </FormControl >
    )
}
