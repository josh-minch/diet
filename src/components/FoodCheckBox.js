import React from "react"
import { Checkbox } from "@chakra-ui/react"
export const FoodCheckBox = React.memo(({ foodName, id, isChecked, onFoodChecked }) => {
    return (
        <Checkbox
            spacing={1}
            mr={3}
            mb='8px'
            value={foodName}
            id={id}
            isChecked={isChecked}
            onChange={onFoodChecked}
        >
            {foodName}
        </Checkbox>
    )
})