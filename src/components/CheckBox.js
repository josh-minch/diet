import React from "react"
import { Checkbox } from "@chakra-ui/react"


const Checkbox = React.memo(({ foodName, id, checked, onFoodChecked }) => {
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
