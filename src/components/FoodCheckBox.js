import React from "react"
import { Checkbox } from "@chakra-ui/react"
export const FoodCheckBox = React.memo(({ foodName, id, isChecked, onFoodChecked }) => {
    return (
        <Checkbox
            h={8} spacing={1} mr={3}
            value={foodName}
            id={id}
            isChecked={isChecked}
            onChange={onFoodChecked}
        >
            {foodName}
        </Checkbox>
    )
})