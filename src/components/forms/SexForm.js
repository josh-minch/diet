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


export const SexForm = ({ sex, setSex, age }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <FormControl as='fieldset'>
            <FormLabel htmlFor='sex'>Sex</FormLabel>
            <RadioGroup onChange={setSex} value={sex} id='sex'>
                <HStack spacing={6}>
                    <Radio value='female' onChange={onOpen}>Female</Radio>
                    <Radio value='male' onChange={onClose}>Male</Radio>
                </HStack>
            </RadioGroup>
            {age >= 14 &&
                <Collapse in={isOpen} animateOpacity>
                    <PregForm marginLeft={3} />
                    <LactForm marginLeft={3} />
                </Collapse>
            }
        </FormControl >
    )
}
