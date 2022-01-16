import React from 'react';
import { Header } from './components/Header';
// import { CalorieForm } from './components/CalorieForm'
import {
    ChakraProvider, Box, SimpleGrid, Checkbox
} from '@chakra-ui/react';
import { fruit } from './food_grps/fruit';
import { dairy } from './food_grps/dairy';
import { foodData } from './food_grps/foodData';

const FoodCheckBox = React.memo(({ foodName, id, checked, onFoodChecked }) => {
    return (
        <Checkbox
            h={8} spacing={1} mr={3}
            value={foodName}
            id={id}
            isChecked={checked}
            onChange={onFoodChecked}
        >
            {foodName}
        </Checkbox>
    )
})


function App() {

    const [foodState, setFoodState] = React.useState(foodData)

    const onFoodChecked = React.useCallback((e) => {
        const checkedId = Number(e.target.id)
        setFoodState(foodState => foodState.map((food, index) =>
            index === checkedId ? { ...food, isChecked: !food.isChecked } : food
        ))
    }, [])


    return (
        < ChakraProvider >
            <div>
                {
                    foodState
                        .filter(food => food.group === 'whole')
                        .map(({ foodName, id, isChecked }) =>
                            <FoodCheckBox
                                foodName={foodName}
                                checked={isChecked}
                                onFoodChecked={onFoodChecked}
                                key={id}
                                id={id}
                            />
                        )
                }
                {
                    foodState.filter(food => food.group === 'dairy').map(({ foodName, id, isChecked }) =>
                        <FoodCheckBox
                            foodName={foodName}
                            checked={isChecked}
                            onFoodChecked={onFoodChecked}
                            key={id}
                            id={id}
                        />
                    )
                }
            </div>
            {/* <Box>
                <Header />
                <SimpleGrid mt={4} columns={[1, null, 3]} spacing='20px'>
                    <FoodSelect checkedState={checkedState} onFoodChecked={onFoodChecked} />
                </SimpleGrid>
            </Box> */}
        </ChakraProvider >
    );
}

export default App;
