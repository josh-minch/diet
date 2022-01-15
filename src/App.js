import React from 'react';
import { Header } from './components/Header';
// import { CalorieForm } from './components/CalorieForm'
import {
    ChakraProvider, Box, SimpleGrid
} from '@chakra-ui/react';
import { FoodSelect } from './components/FoodSelect';
import { foodIds } from './food_grps/foodIds';


function App() {
    const [checkedState, setCheckedState] = React.useState(
        new Array(Object.keys(foodIds).length).fill(false)
    )

    const onFoodChecked = React.useCallback((e) => {
        const changedCheckId = foodIds[e.target.id]

        setCheckedState(prevCheckedState => prevCheckedState.map((checkedValue, checkedStateId) => {
            return changedCheckId === checkedStateId ? !checkedValue : checkedValue
        }
        ))
    }, [])


    return (
        <ChakraProvider>
            <Box>
                <Header />
                <SimpleGrid mt={4} columns={[1, null, 3]} spacing='20px'>
                    <FoodSelect checkedState={checkedState} onFoodChecked={onFoodChecked} />
                </SimpleGrid>
            </Box>
        </ChakraProvider >
    );
}

export default App;
