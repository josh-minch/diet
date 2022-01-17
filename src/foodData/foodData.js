import { green, red, bean, starchy, other } from './veg'
import { fruit } from './fruit'
import { whole, refined } from './grains'
import { dairy } from './dairy'
import { meats, seafood, nuts } from './protein'

const foodGroups = ['green', 'red', 'bean', 'starchy', 'other', 'fruit', 'whole', 'refined', 'dairy', 'meats', 'seafood', 'nuts']
const foodsArrays = [green, red, bean, starchy, other, fruit, whole, refined, dairy, meats, seafood, nuts]

const foodData = []
let id = 0
for (let i = 0; i < foodGroups.length; i++) {
    for (let j = 0; j < foodsArrays[i].length; j++) {
        foodData.push({
            foodName: foodsArrays[i][j],
            id: id++,
            isChecked: false,
            group: foodGroups[i]
        })
    }
}



export { foodGroups, foodData }