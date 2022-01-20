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

function App() {
    const [foodCheckedState, setFoodCheckedState] = React.useState(foodData)
    const [myFoodState, setMyFoodState] = React.useState([])

    const createFoodItem = (name, group, quantity = 1, unit = 'cup') => {
        return {
            name: name,
            group: group,
            quantity: quantity,
            unit: unit,
            servings: quantity,
            id: nanoid()
        }
    }

    const onFoodChecked = React.useCallback((e) => {
        const checkedFoodName = e.target.value
        setFoodCheckedState(foodState => {
            const newFoodState = { ...foodState }
            const oldCheckedState = newFoodState[checkedFoodName]['isChecked']
            newFoodState[checkedFoodName]['isChecked'] = !oldCheckedState
            return newFoodState
        })

        const myFoodItem = createFoodItem(checkedFoodName, foodData[checkedFoodName].group)
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
                < Log myFoodState={myFoodState} />
            </SimpleGrid>
        </ChakraProvider >
    );
}

export default App;
