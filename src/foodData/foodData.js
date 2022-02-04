import { green, red, bean, starchy, other } from './veg'
import { fruit } from './fruit'
import { whole, refined } from './grains'
import { dairy } from './dairy'
import { meats, seafood, nuts } from './protein'

const foodGroups = ['green', 'red', 'bean', 'starchy', 'other', 'fruit', 'whole', 'refined', 'dairy', 'meats', 'seafood', 'nuts']
const foodsArrays = [green, red, bean, starchy, other, fruit, whole, refined, dairy, meats, seafood, nuts]
const displayNames = ['Dark Green Vegetables', 'Red and Orange Vegetables', 'Beans, Peas, and Lentils', 'Starchy Vegetables', 'Other Vegetables',
    'Fruit', 'Whole Grains', 'Refined Grains', 'Dairy', 'Meats, Poultry, and Eggs', 'Seafood (Low in Mercury)', 'Nuts, Seeds, and Soy Products']
const foodGroupToDisplayName = {}
foodGroups.forEach((group, i) => foodGroupToDisplayName[group] = displayNames[i])

const foodData = {}
let id = 0
for (let i = 0; i < foodGroups.length; i++) {
    for (let j = 0; j < foodsArrays[i].length; j++) {
        let foodName = foodsArrays[i][j]
        foodData[foodName] = {
            foodName: foodName,
            id: id++,
            isChecked: false,
            group: foodGroups[i]
        }
    }
}



export { foodGroups, foodGroupToDisplayName, foodData }