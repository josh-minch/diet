import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Box,
    Center,
    useDisclosure,
    Text,
    Tag,
    ButtonGroup,
    IconButton,
    NumberInput,
    NumberInputField,
    Spacer,
    Flex,
    Select,
    Stack,
} from '@chakra-ui/react';

import {
    MinusIcon,
    AddIcon
} from '@chakra-ui/icons';
import { nanoid } from 'nanoid';
import { VegGroup } from '../components/VegGroup';
import { FruitGroup } from '../components/FruitGroup';
import { GrainGroup } from '../components/GrainGroup';
import { DairyGroup } from '../components/DairyGroup';
import { ProteinGroup } from '../components/ProteinGroup';
import { foodData } from '../foodData/foodData';
import { getServingConversionFactor } from '../patterns/patterns';
import { foodGroupToDisplayName } from '../foodData/foodData'

const createFoodItem = (name, unit = 'cup') => {
    return {
        name: name,
        group: foodData[name].group,
        quantity: 1 / getServingConversionFactor(name),
        unit: unit,
        servings: function () {
            return getServingConversionFactor(this.name) * this.quantity
        },
        id: nanoid()
    }
}


export const AddFoodPanel = React.memo(({ setMyFoodState }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [selectedFood, setSelectedFood] = React.useState(createFoodItem('basil'))

    const openModal = React.useCallback((foodName) => {
        setSelectedFood(createFoodItem(foodName))
        onOpen()
    }, [onOpen])

    const onClick = React.useCallback(() => {
        setMyFoodState(myFoodState => myFoodState.concat(selectedFood))
        onClose()
    }, [selectedFood, setMyFoodState, onClose])

    return (
        <Box>
            <VegGroup openModal={openModal} />
            <FruitGroup openModal={openModal} />
            <GrainGroup openModal={openModal} />
            <DairyGroup openModal={openModal} />
            <ProteinGroup openModal={openModal} />

            <Modal isOpen={isOpen} onClose={onClose} isCentered >
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalHeader>
                    </ModalHeader>
                    <ModalBody>
                        <Stack>
                            <Text mb={3} fontSize='xl' fontWeight='semibold' casing='capitalize' >{selectedFood.name}</Text>
                            <Flex>
                                <Center>
                                    <Text>Amount</Text>
                                </Center>
                                <Spacer />
                                <Center>
                                    <ButtonGroup isAttached>
                                        <IconButton icon={< MinusIcon boxSize={3} />} variant='outline' />
                                        <NumberInput
                                        >
                                            <NumberInputField maxW='70px' borderRadius={0} textAlign='center' pe='10px' ps='10px' />
                                        </NumberInput>
                                        <IconButton icon={< AddIcon boxSize={3} />} variant='outline' />
                                    </ButtonGroup>
                                </Center>
                                <Select maxW='100px'>
                                    <option value={selectedFood.unit}>{selectedFood.unit}</option>
                                </Select>
                            </Flex>
                            <Box>
                                <Tag variant='subtle' colorScheme={'red'}>{foodGroupToDisplayName[selectedFood.group].toLowerCase()}</Tag>
                            </Box>
                        </Stack>
                    </ModalBody>
                    <Center>
                        <ModalFooter>
                            <Button color='brand.100' onClick={onClick}>Add to Log</Button>
                        </ModalFooter>
                    </Center>
                </ModalContent>
            </Modal>
        </Box >
    )
})
