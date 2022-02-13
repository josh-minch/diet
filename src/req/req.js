import { foodGroups } from "../foodData/foodData";

const lifeStages = [700, 800, 900, 1000, "1000toddler", 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3200]
const us = {
    700: [2 / 3, 1, 1, 0.75, 1, 0.75, 0.5, 1.75, 1.5, 0.25, 1 + (2 / 3), 2, 8.75, 2, "2-3", 1, 9, null, null],
    800: [0.75, 1 / 3, 1.75, 1 / 3, 1.5, 1.25, 0.75, 2.25, 2, 0.25, 1.75, 2, 7, 2.75, "2-3", 1, 9, null, null],
    900: [1, 0.5, 2.5, 0.5, 2, 1.5, 1, 2.5, 2, 0.5, 2, 2, 7, 2.25, "2-3", 1.25, 8, null, null],
    "1000toddler": [1, 0.5, 2.5, 0.5, 2, 1.5, 1, 3, 2, 1, 2, 2, 7.75, 2.25, "2-3", 1.25, 13, null, null],
    1000: [1, 0.5, 2.5, 0.5, 2, 1.5, 1, 3, 1.5, 1.5, 2, 2, 10, null, "2-3", 2, 15, 130, 13],
    1200: [1.5, 1, 3, 0.5, 3.5, 2.5, 1, 4, 2, 2, 2.5, 3, 14, null, 4, 2, 17, 90, 6],
    1400: [1.5, 1, 3, 0.5, 3.5, 2.5, 1.5, 5, 2.5, 2.5, 2.5, 4, 19, null, 6, 3, 17, 90, 6],
    1600: [2, 1.5, 4, 1, 4, 3.5, 1.5, 5, 3, 2, 2.5, 5, 23, null, 8, 4, 22, 100, 6],
    1800: [2.5, 1.5, 5.5, 1.5, 5, 4, 1.5, 6, 3, 3, 3, 5, 23, null, 8, 4, 24, 140, 8],
    2000: [2.5, 1.5, 5.5, 1.5, 5, 4, 2, 6, 3, 3, 3, 5.5, 26, null, 8, 5, 27, 240, 12],
    2200: [3, 2, 6, 2, 6, 5, 2, 7, 3.5, 3.5, 3, 6, 28, null, 9, 5, 29, 250, 11],
    2400: [3, 2, 6, 2, 6, 5, 22, 8, 4, 4, 3, 6.5, 31, null, 10, 5, 31, 320, 13],
    2600: [3.5, 2.5, 7, 2.5, 7, 5.5, 2, 9, 4.5, 4.5, 3, 6.5, 31, null, 10, 5, 34, 320, 13],
    2800: [4.5, 2.5, 7, 2.5, 7, 5.5, 2.5, 10, 5, 5, 3, 7, 33, null, 10, 6, 36, 370, 13],
    3000: [4, 2.5, 7.5, 3, 8, 7, 2.5, 10, 5, 5, 3, 7, 33, null, 10, 6, 44, 440, 15],
    3200: [4, 2.5, 7.5, 3, 8, 7, 2.5, 10, 5, 5, 3, 7, 33, null, 10, 6, 51, 580, 18],
}

const dailyAmounts = ['veg', 'fruit', 'grains', 'dairy', 'protein', 'oils', 'discret', 'discretPercent']


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