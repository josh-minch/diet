import { green, red, bean, starchy, other } from './veg'
import { fruit } from './fruit'
import { whole, refined } from './grains'
import { dairy } from './dairy'
import { meats, seafood, nuts } from './protein'

const groups = ['green', 'red', 'bean', 'starchy', 'other', 'fruit', 'whole', 'refined', 'dairy', 'meats', 'seafood', 'nuts']
const foodsArrays = [green, red, bean, starchy, other, fruit, whole, refined, dairy, meats, seafood, nuts]

const foodData = []
let id = 0
for (let i = 0; i < groups.length; i++) {
    for (let j = 0; j < foodsArrays[i].length; j++) {
        foodData.push({
            foodName: foodsArrays[i][j],
            id: id++,
            isSelected: false,
            group: groups[i]
        })
    }
}

// let i = 0
// const foodData = groups.map((group, j) => {
//     return foodsArrays[j].forEach(food => {
//         return {
//             foodName: food,
//             id: i++,
//             isSelected: false,
//             group: group
//         }
//     })
// })



export { foodData }