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
    useDisclosure
} from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { VegGroup } from '../components/VegGroup';
import { FruitGroup } from '../components/FruitGroup';
import { GrainGroup } from '../components/GrainGroup';
import { DairyGroup } from '../components/DairyGroup';
import { ProteinGroup } from '../components/ProteinGroup';
import { foodData } from '../foodData/foodData';
import { getServingConversionFactor } from '../req/req';


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
    const [selectedFood, setSelectedFood] = React.useState()

    const openModal = React.useCallback((e, foodName) => {
        setSelectedFood(foodName)
        onOpen()
    }, [onOpen])

    const onClick = React.useCallback(() => {
        setMyFoodState(myFoodState => myFoodState.concat(createFoodItem(selectedFood)))
        onClose()
    }, [selectedFood, setMyFoodState, onClose])

    return (
        <Box>
            <VegGroup openModal={openModal} />
            <FruitGroup openModal={openModal} />
            <GrainGroup openModal={openModal} />
            <DairyGroup openModal={openModal} />
            <ProteinGroup openModal={openModal} />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button onClick={onClick} variant='outline' colorScheme='blue'>Add to Log</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
})
