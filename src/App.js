import React from 'react';
import {
    ChakraProvider,
    Box,
    SimpleGrid,
    Heading,
    Divider
} from '@chakra-ui/react';
import { VegGroup } from './components/VegGroup';
import { FruitGroup } from './components/FruitGroup';
import { GrainGroup } from './components/GrainGroup';
import { ProteinGroup } from './components/ProteinGroup';

import { foodData } from './foodData/foodData'


function App() {

    const [foodCheckedState, setFoodCheckedState] = React.useState(foodData)

    const onFoodChecked = React.useCallback((e) => {
        const checkedFoodName = e.target.value
        setFoodCheckedState(foodState => foodState.map((food, index) =>
            food.foodName === checkedFoodName ? { ...food, isChecked: !food.isChecked } : food
        ))
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
            </SimpleGrid>
        </ChakraProvider >
    );
}

export default App;
