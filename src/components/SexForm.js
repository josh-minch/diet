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


export const SexForm = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <FormControl as='fieldset'>
            <FormLabel htmlFor='sex'>Sex</FormLabel>
            <RadioGroup id='sex'>
                <HStack spacing={6}>
                    <Radio value='female' onChange={onOpen}>Female</Radio>
                    <Radio value='male' onChange={onClose}>Male</Radio>
                </HStack>
            </RadioGroup>
            <Collapse in={isOpen} animateOpacity>
                <PregForm marginLeft={2} />
                <LactForm marginLeft={2} />
            </Collapse>
        </FormControl >
    )
}