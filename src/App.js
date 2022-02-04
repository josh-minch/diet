import React from 'react';
import {
    ChakraProvider,
    Box,
    SimpleGrid,
    Tab,
    Tabs,
    TabList,
    TabPanel,
    TabPanels,
    Container,
    Flex,
    Spacer
} from '@chakra-ui/react';
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


    return (
        < ChakraProvider >
            <Tabs defaultIndex={0} variant='soft-rounded' colorScheme='red' isFitted >
                <TabPanels h='93vh' overflow="scroll">
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

                <TabList borderTop='1px' borderTopColor='gray.300' h='7vh' w="100vw" position="fixed" bottom="0px" backgroundColor="white" outline='0'  >
                    <Tab _focus={{ boxShadow: "none", }}>Add food</Tab>
                    <Tab _focus={{ boxShadow: "none", }}>Log</Tab>
                    <Tab _focus={{ boxShadow: "none", }}>Recipes</Tab>
                </TabList>

            </Tabs >

        </ChakraProvider >
    );
}

export default App;
