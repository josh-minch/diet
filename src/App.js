import React from 'react';
import {
    ChakraProvider,
    Tab,
    Tabs,
    TabList,
    TabPanel,
    TabPanels,
    VStack,
    Text,
    extendTheme,
    Spacer,
    Button,
    Flex,
    useDisclosure,
    Heading,
    Stack
} from '@chakra-ui/react';
import { Global, css } from '@emotion/react'
import { CalendarIcon, PlusSquareIcon, TimeIcon, SettingsIcon } from '@chakra-ui/icons';
import { CalorieForm } from './components/CalorieForm';
import { AddFoodPanel } from './components/AddFoodPanel';
import { Log } from './components/Log';


const theme = extendTheme({
    textStyles: {
        tabText: {
            fontSize: '13px',
            letterSpacing: '-0.2px'
        },
    },
    colors: {
        brand: {
            // Red
            100: 'rgb(214, 0, 23)',
        }
    }
})

const GlobalStyles = css`
  /*
    https://github.com/WICG/focus-visible#2-update-your-css

    This will hide the focus indicator if the element receives focus via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not(.focus-visible),
  .js-focus-visible :focus:not(.focus-visible) + [data-focus] {
    outline: none;
    box-shadow: none;
  }
`

const tabHeight = '55px'

function App() {
    const [myFoodState, setMyFoodState] = React.useState([])

    const [age, setAge] = React.useState('')
    const [ageUnit, setAgeUnit] = React.useState('years')
    const [sex, setSex] = React.useState('')
    const [activityLevel, setActivityLevel] = React.useState('sed')
    const [calNeeds, setCalNeeds] = React.useState(2000)

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <ChakraProvider theme={theme} >
            <Global styles={GlobalStyles} />
            <Tabs defaultIndex={0} variant='unstyled' isFitted>
                <TabPanels pb={tabHeight} h={`calc(100% - ${tabHeight})`} overflow="scroll">
                    <TabPanel >
                        <AddFoodPanel setMyFoodState={setMyFoodState} />
                    </TabPanel>
                    <TabPanel >
                        <Flex alignItems={'center'}>
                            <Stack spacing={1}>
                                <Heading size='md'>Dietary needs</Heading>
                                <Text>{calNeeds} calories</Text>
                            </Stack>
                            <Spacer />
                            <Button onClick={onOpen} leftIcon={<SettingsIcon />}>Profile</Button>
                        </Flex>
                        <CalorieForm calorieModalIsOpen={isOpen} calorieModalOnClose={onClose} calNeeds={calNeeds} setCalNeeds={setCalNeeds} age={age} ageUnit={ageUnit} sex={sex} activityLevel={activityLevel}
                            setAge={setAge} setAgeUnit={setAgeUnit} setSex={setSex} setActivityLevel={setActivityLevel} />
                        <Log myFoodState={myFoodState} setMyFoodState={setMyFoodState} calNeeds={calNeeds} />
                    </TabPanel>
                    <TabPanel>
                        <p>Recipes</p>
                    </TabPanel>
                </TabPanels>

                <TabList pt='2px' borderTop='1px' borderTopColor='gray.300' h={tabHeight} w="100vw" position="fixed" bottom="0px" backgroundColor="white" outline='0'  >
                    <Tab color={'gray'} _selected={{ color: 'brand.100' }} >
                        <VStack spacing={'1px'}>
                            <PlusSquareIcon boxSize={5} />
                            <Text textStyle='tabText'>Add food</Text>
                        </VStack>
                    </Tab>
                    <Tab color={'gray'} _selected={{ color: 'brand.100' }} >
                        <VStack spacing={'1px'}>
                            <TimeIcon boxSize={5} />
                            <Text textStyle='tabText'>Daily Log</Text>
                        </VStack>
                    </Tab>
                    <Tab color={'gray'} _selected={{ color: 'brand.100' }} >
                        <VStack spacing={'1px'}>
                            <CalendarIcon boxSize={5} />
                            <Text textStyle='tabText'>Recipes</Text>
                        </VStack>
                    </Tab>
                </TabList>

            </Tabs >

        </ChakraProvider >
    );
}

export default App;
