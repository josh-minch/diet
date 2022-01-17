import { veg } from './veg'
import { fruit } from './fruit'
import { whole, refined } from './grains'
import { dairy } from './dairy'
import { protein } from './protein'

let allFoods = []
veg.forEach(foodGoup =>
    allFoods = allFoods.concat(foodGoup.foods)
)
allFoods = allFoods.concat(fruit, whole, refined, dairy)
protein.forEach(foodGoup =>
    allFoods = allFoods.concat(foodGoup.foods)
)

const foodIds = {}
for (let i = 0; i < allFoods.length; i++) {
    foodIds[allFoods[i]] = i
}

export { foodIds }