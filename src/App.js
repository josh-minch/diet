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
    extendTheme
} from '@chakra-ui/react';
import { CalendarIcon, PlusSquareIcon } from '@chakra-ui/icons';
import { nanoid } from 'nanoid';

import { VegGroup } from './components/VegGroup';
import { FruitGroup } from './components/FruitGroup';
import { GrainGroup } from './components/GrainGroup';
import { DairyGroup } from './components/DairyGroup';
import { ProteinGroup } from './components/ProteinGroup';
import { Log } from './components/Log';

import { foodData } from './foodData/foodData';
import { getServingConversionFactor } from './req/req';

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

const theme = extendTheme({
    textStyles: {
        tabText: {
            fontSize: '13px',
            letterSpacing: '-0.2px'
        },
    },
    colors: {
        brand: {
            100: 'rgb(214, 0, 23)',
        }
    }
})

function App() {
    const [foodCheckedState, setFoodCheckedState] = React.useState(foodData)
    const [myFoodState, setMyFoodState] = React.useState([])

    const onFoodChecked = React.useCallback((e) => {
        const checkedFoodName = e.target.value
        setFoodCheckedState(foodState => {
            const newFoodState = { ...foodState }
            const oldCheckedState = newFoodState[checkedFoodName]['isChecked']
            newFoodState[checkedFoodName]['isChecked'] = !oldCheckedState
            return newFoodState
        })

        const myFoodItem = createFoodItem(checkedFoodName)
        setMyFoodState(myFoodState => e.target.checked ?
            myFoodState.concat(myFoodItem) :
            myFoodState.filter(food => food.name !== checkedFoodName))
    }, [])

    const tabHeight = '55px'
    return (
        < ChakraProvider theme={theme} >
            <Tabs defaultIndex={0} variant='unstyled' isFitted >
                <TabPanels h={`calc(100vh - ${tabHeight})`} overflow="scroll">
                    <TabPanel >
                        <VegGroup foodCheckedState={foodCheckedState} onFoodChecked={onFoodChecked} />
                        <FruitGroup foodCheckedState={foodCheckedState} onFoodChecked={onFoodChecked} />
                        <GrainGroup foodCheckedState={foodCheckedState} onFoodChecked={onFoodChecked} />
                        <DairyGroup foodCheckedState={foodCheckedState} onFoodChecked={onFoodChecked} />
                        <ProteinGroup foodCheckedState={foodCheckedState} onFoodChecked={onFoodChecked} />
                    </TabPanel>
                    <TabPanel >
                        <Log myFoodState={myFoodState} setMyFoodState={setMyFoodState} />
                    </TabPanel>
                    <TabPanel>
                        <p>Recipes</p>
                    </TabPanel>
                </TabPanels>

                <TabList pt='2px' borderTop='1px' borderTopColor='gray.300' h={tabHeight} w="100vw" position="fixed" bottom="0px" backgroundColor="white" outline='0'  >
                    <Tab color={'gray'} _selected={{ color: 'brand.100' }} _focus={{ boxShadow: "none", }}>
                        <VStack spacing={'1px'}>
                            <PlusSquareIcon boxSize={5} />
                            <Text textStyle='tabText'>Add food</Text>
                        </VStack>
                    </Tab>
                    <Tab color={'gray'} _selected={{ color: 'brand.100' }} _focus={{ boxShadow: "none", }}>
                        <VStack spacing={'1px'}>
                            <CalendarIcon boxSize={5} />
                            <Text textStyle='tabText'>Daily Log</Text>
                        </VStack>
                    </Tab>
                    <Tab color={'gray'} _selected={{ color: 'brand.100' }} _focus={{ boxShadow: "none", }}>
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
