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
import { Global, css } from '@emotion/react'
import { CalendarIcon, PlusSquareIcon, TimeIcon } from '@chakra-ui/icons';
import { nanoid } from 'nanoid';

import { CalorieForm } from './components/CalorieForm';
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
            <Global styles={GlobalStyles} />
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
                        <CalorieForm />
                        <Log myFoodState={myFoodState} setMyFoodState={setMyFoodState} />
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
