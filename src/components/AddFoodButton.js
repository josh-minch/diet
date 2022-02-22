import React from 'react'
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Box
} from '@chakra-ui/react'
import { nanoid } from 'nanoid';

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

export const AddFoodButton = ({ foodName, setMyFoodState }) => {
    // const { isOpen, onOpen, onClose } = useDisclosure()
    const onClick = React.useCallback(() => {
        setMyFoodState(myFoodState => myFoodState.concat(createFoodItem(foodName)))
    }, [foodName, setMyFoodState])

    return (
        <>
            <Button size={'sm'} foodame={foodName} onClick={onClick} >
                {foodName}
            </Button>

            {/* <Modal isOpen={isOpen} onClose={onClose}>
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
                        <Button onClick={() => onFoodClicked(myFoodState => myFoodState.concat(createFoodItem(foodName)))} variant='ghost'>Add to Log</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal> */}
        </>
    )
}
