import { foodGroups } from "../foodData/foodData";

const req_major_food_groups_veg = [3.5, 2, 9.5, 3, 4.5, 34]
const req_major_food_groups_us = [3.5, 2, 9, 3, 6.5, 34]
const req_all_food_groups_us = [2.5 / 7, 7 / 7, 2.5 / 7, 7 / 7, 5.5 / 7, 2, 4.5, 4.5, 3, 31 / 7, 10 / 7, 5 / 7]
export const req = foodGroups.map((foodGroup, i) => ({ group: foodGroup, req: req_all_food_groups_us[i] }))

const leafy = new Set(['basil', 'bok choy', 'chard', 'cilantro', 'collard greens', 'kale', 'romaine lettuce', 'leaf lettuce', 'mustard greens', 'spinach', 'amaranth leaves', 'beet greens', 'bitter melon leaves', 'chamnamul', 'chrysanthemum leaves', 'cress', 'dandelion greens', 'lambsquarters', 'poke greens', 'nettles', 'taro leaves', 'turnip greens', 'watercress'])

const dried = new Set(['sun-dried tomatoes', 'raisins', 'currants', 'prunes'])

const cookedGrain = new Set(['barley', 'brown rice', 'oats', 'quinoa', 'whole-grain cereals', 'whole-grain cornmeal', 'amaranth', 'buckwheat', 'bulgur', 'millet', 'dark rye', 'triticale', 'wild rice', 'refined-grain cereals', 'masa', 'refined pasta', 'white rice', 'corn grits', 'cream of rice', 'cream of wheat', 'pearled barley',])

// Used to calculate serving for a given quantity of food.
// servingConversionFactor * foodQuantity = serving
// For example, 2 cups of leafy greens = 1 serving.
export const getServingConversionFactor = (foodName) => {
    let servingConversionFactor = 1
    if (leafy.has(foodName)) {
        servingConversionFactor = 0.5
    } else if (dried.has(foodName)) {
        servingConversionFactor = 2
    } else if (cookedGrain.has(foodName)) {
        servingConversionFactor = 2
    }
    return servingConversionFactor
}