import React from 'react'
import {
    Heading,
    Collapse,
    Button,
    Box,
    Flex,
    Spacer,
    Center,
    IconButton,
    Wrap,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { foodData } from '../foodData/foodData';
import { AddFoodButton } from './AddFoodButton';
import { nanoid } from 'nanoid';

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

const FoodGroupHeader = ({ headingSize, foodGroupDisplayName, handleToggle, show }) => {
    return (
        <Flex alignItems={'end'} ml={1}>
            <Heading mb={1} size={headingSize} fontWeight={headingSize === 'sm' ? '600' : '700'}>{foodGroupDisplayName}</Heading>
            <Spacer />
            <Button
                colorScheme='red'
                color='brand.100'
                size='sm'
                onClick={handleToggle}
                pr={1}
                variant='ghost'
                rightIcon={show ? <ChevronUpIcon w={4} h={4} /> : <ChevronDownIcon w={4} h={4} />}>
                Show {show ? 'Less' : 'All'}
            </Button>
        </Flex>
    )
}

const ShowAllIconButton = ({ handleToggle, show }) => {
    return (
        <Center>
            <IconButton colorScheme='red' color='brand.100' size='sm' w={20} h={8} onClick={handleToggle} variant='ghost'
                icon={show ? <ChevronUpIcon w={4} h={4} /> : <ChevronDownIcon w={4} h={4} />}>
            </IconButton>
        </Center>
    )
}

const transitionDuration = 0.15
const collapseStartingHeight = 160

const CollapsableFoodGroupContent = ({ foodGroup, show, setMyFoodState }) => {
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
        <Collapse
            transition={{ enter: { duration: transitionDuration }, exit: { duration: transitionDuration } }
            }
            startingHeight={collapseStartingHeight}
            in={show}
        >
            <Wrap mt={2}>
                {
                    Object.values(foodData)
                        .filter(food => food.group === foodGroup)
                        .map(({ foodName, id }) =>
                            <AddFoodButton
                                foodName={foodName}
                                openModal={openModal}
                                key={id}
                            />
                        )
                }
            </Wrap>
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
        </Collapse >
    )
}

export const FoodGroup = ({ foodGroup, foodGroupDisplayName, headingSize, setMyFoodState }) => {
    const [show, setShow] = React.useState(false)
    const handleToggle = React.useCallback(() => setShow(show => !show), [])

    return (
        <Box mb={0}>
            <FoodGroupHeader headingSize={headingSize} foodGroupDisplayName={foodGroupDisplayName} handleToggle={handleToggle} show={show} />
            <CollapsableFoodGroupContent foodGroup={foodGroup} show={show} setMyFoodState={setMyFoodState} />
            <ShowAllIconButton handleToggle={handleToggle} show={show} />
        </Box>
    )
}

FoodGroup.defaultProps = {
    headingSize: 'sm'
}
