import React from 'react';
import {
    ChakraProvider,
    Box,
    SimpleGrid,

} from '@chakra-ui/react';
import { nanoid } from 'nanoid';

import { VegGroup } from './components/VegGroup';
import { FruitGroup } from './components/FruitGroup';
import { GrainGroup } from './components/GrainGroup';
import { ProteinGroup } from './components/ProteinGroup';
import { Log } from './components/Log';

import { foodData } from './foodData/foodData';

const createFoodItem = (name, quantity = 1, unit = 'cup') => {
    return {
        name: name,
        group: foodData[name].group,
        quantity: quantity,
        unit: unit,
        servings: function () {
            return this.quantity
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
            <SimpleGrid columns={[1, null, 3]}>
                <Box ml={1} maxW='400px' h='92vh' overflowY='scroll'>
                    <VegGroup foodCheckedState={foodCheckedState} onFoodChecked={onFoodChecked} />
                    <FruitGroup foodCheckedState={foodCheckedState} onFoodChecked={onFoodChecked} />
                    <GrainGroup foodCheckedState={foodCheckedState} onFoodChecked={onFoodChecked} />
                    <ProteinGroup foodCheckedState={foodCheckedState} onFoodChecked={onFoodChecked} />
                </Box>
                < Log myFoodState={myFoodState} setMyFoodState={setMyFoodState} />
            </SimpleGrid>
        </ChakraProvider >
    );
}

export default App;
