import React from 'react'
import { Box } from '@chakra-ui/react';
import { VegGroup } from '../components/VegGroup';
import { FruitGroup } from '../components/FruitGroup';
import { GrainGroup } from '../components/GrainGroup';
import { DairyGroup } from '../components/DairyGroup';
import { ProteinGroup } from '../components/ProteinGroup';

export const AddFoodPanel = React.memo(({ setMyFoodState }) => {
    return (
        <Box>
            <VegGroup setMyFoodState={setMyFoodState} />
            <FruitGroup setMyFoodState={setMyFoodState} />
            <GrainGroup setMyFoodState={setMyFoodState} />
            <DairyGroup setMyFoodState={setMyFoodState} />
            <ProteinGroup setMyFoodState={setMyFoodState} />
        </Box>
    )
})
