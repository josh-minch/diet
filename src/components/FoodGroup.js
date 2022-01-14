import React from 'react'
import {
    Checkbox,
    CheckboxGroup,
    Heading,
    Collapse,
    Button,
    Box, Flex,
    Spacer,
    Center,
    IconButton,
} from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'


const FoodCheckBoxGroup = ({ foods }) => {
    return (
        <CheckboxGroup >
            {foods.map((food, id) =>
                <Checkbox key={id} h={8} spacing={1} mr={3}>
                    {food}
                </Checkbox>)}
        </CheckboxGroup>
    )
}

const FoodSelectHeader = ({ headerSize, groupName }) => {
    return (
        <Heading
            mb={1}
            size={headerSize}
            as={headerSize === 'md' ? 'h4' : 'h5'}
            fontWeight={headerSize === 'md' ? '700' : '600'}>
            {groupName}
        </Heading >
    )
}

export const FoodGroup = ({ foods, groupName, headerSize, isCollapsable, image }) => {
    const [show, setShow] = React.useState(false)
    const handleToggle = () => setShow(!show)
    const transitionDuration = 0.15

    let content;

    if (isCollapsable) {
        content =
            <Box mt={1}>
                <Flex alignItems={'end'}>
                    <FoodSelectHeader headerSize={headerSize} groupName={groupName} />
                    <Spacer />
                    <Button colorScheme='red' size='sm' onClick={handleToggle} pr={1} variant='ghost'
                        rightIcon={show ? <ChevronUpIcon w={4} h={4} /> : <ChevronDownIcon w={4} h={4} />} >
                        Show {show ? 'Less' : 'All'}
                    </Button>
                </Flex>
                {/* Put Collapse in a Box with ml=-1 and CheckboxGroup with ml=1 to avoid checkbox clipping on left side when collapse is not expanded */}
                <Box ml={-1}>
                    <Collapse
                        transition={{ enter: { duration: transitionDuration }, exit: { duration: transitionDuration } }}
                        startingHeight={95}
                        in={show}
                    >
                        <Box ml={1}>
                            <FoodCheckBoxGroup foods={foods} />
                        </Box>
                    </Collapse>
                </Box>
                <Center>
                    <IconButton colorScheme='red' size='sm' w={20} h={6} onClick={handleToggle} variant='ghost' _focus={{ boxShadow: "none", }}
                        icon={show ? <ChevronUpIcon w={4} h={4} /> : <ChevronDownIcon w={4} h={4} />} >
                    </IconButton>
                </Center>
            </Box >
    }
    if (!isCollapsable) {
        content =
            <Box mt={1}>
                <FoodSelectHeader headerSize={headerSize} groupName={groupName} />
                <FoodCheckBoxGroup foods={foods} />
            </Box >
    }

    return content
}

FoodGroup.defaultProps = {
    headerSize: 'md',
    isCollapsable: true
}