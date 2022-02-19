const ageRangesMonths = [12, 15, 18, 21]
const ageRangesYears = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 26, 31, 36, 41, 46, 51, 56, 61, 66, 71, 76]

// Get a correct ageRange from an integer age and unit of months or years. Ages that fall below 2 ranges correspond to the lower level.
// For example, 20 years corresponds to the ageRange 19.
const getAgeRange = (age, ageUnit) => {
    if (ageUnit === 'months' && (age < 12 || age > 23)) {
        throw new RangeError("Age in months must be between 12 and 23.")
    }
    if (ageUnit === 'years' && age < 2) {
        throw new RangeError("Age in years must be at least 2.")
    }
    const ageRanges = ageUnit === 'years' ? ageRangesYears : ageRangesMonths
    return ageRanges.slice().reverse().find(ageRange => ageRange <= age)
}

// Activity levels of sedentary, moderately active, and active, and their corresponding index in calNeeds
const activityLevels = { 'sed': 0, 'mod': 1, 'act': 2 }

// Map of sex, ageUnit, ageRange, and activityLevel to a calLevel.
// Each [sex][ageUnit][ageRange] property is an array of 3 calLevels, each corresponding to a different activity level.
// For example, a 20 year-old sedentary female has a calLevel of 2000.
const calNeeds = {
    'female': {
        'months': {
            12: 800,
            15: 800,
            18: 900,
            21: "1000toddler",
        },
        'years': {
            2: [1000, 1000, 1000],
            3: [1000, 1200, 1400],
            4: [1200, 1400, 1400],
            5: [1200, 1400, 1600],
            6: [1200, 1400, 1600],
            7: [1200, 1600, 1800],
            8: [1400, 1600, 1800],
            9: [1400, 1600, 1800],
            10: [1400, 1800, 2000],
            11: [1600, 1800, 2000],
            12: [1600, 2000, 2200],
            13: [1600, 2000, 2200],
            14: [1800, 2000, 2400],
            15: [1800, 2000, 2400],
            16: [1800, 2000, 2400],
            17: [1800, 2000, 2400],
            18: [1800, 2000, 2400],
            19: [2000, 2200, 2400],
            21: [2000, 2200, 2400],
            26: [1800, 2000, 2400],
            31: [1800, 2000, 2200],
            36: [1800, 2000, 2200],
            41: [1800, 2000, 2200],
            46: [1800, 2000, 2200],
            51: [1600, 1800, 2200],
            56: [1600, 1800, 2200],
            61: [1600, 1800, 2000],
            66: [1600, 1800, 2000],
            71: [1600, 1800, 2000],
            76: [1600, 1800, 2000],
        }
    },
    'male': {
        'months': {
            12: 800,
            15: 900,
            18: "1000toddler",
            21: "1000toddler",
        },
        'years': {
            2: [1000, 1000, 1000],
            3: [1000, 1400, 1400],
            4: [1200, 1400, 1600],
            5: [1200, 1400, 1600],
            6: [1400, 1600, 1800],
            7: [1400, 1600, 1800],
            8: [1400, 1600, 2000],
            9: [1600, 1800, 2000],
            10: [1600, 1800, 2200],
            11: [1800, 2000, 2200],
            12: [1800, 2200, 2400],
            13: [2000, 2200, 2600],
            14: [2000, 2400, 2800],
            15: [2200, 2600, 3000],
            16: [2400, 2800, 3200],
            17: [2400, 2800, 3200],
            18: [2400, 2800, 3200],
            19: [2600, 2800, 3000],
            21: [2400, 2800, 3000],
            26: [2400, 2600, 3000],
            31: [2400, 2600, 3000],
            36: [2400, 2600, 2800],
            41: [2200, 2600, 2800],
            46: [2200, 2400, 2800],
            51: [2200, 2400, 2800],
            56: [2200, 2400, 2600],
            61: [2000, 2400, 2600],
            66: [2000, 2200, 2600],
            71: [2000, 2200, 2600],
            76: [2000, 2200, 2400],
        }
    }
}

export const getCalNeeds = (sex, age, ageUnit, activityLevel) => {
    const ageRange = getAgeRange(age, ageUnit)
    if (ageUnit === 'months') {
        return calNeeds[sex][ageUnit][ageRange]
    }
    return calNeeds[sex][ageUnit][ageRange][activityLevels[activityLevel]]
}

// const calLevels = [700, 800, 900, 1000, "1000toddler", 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3200]
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



const req_all_food_groups_us = [2.5 / 7, 7 / 7, 2.5 / 7, 7 / 7, 5.5 / 7, 2, 4.5, 4.5, 3, 31 / 7, 10 / 7, 5 / 7]

const foodGroups = ['veg', 'green', 'red', 'bean', 'starchy', 'other', 'fruit', 'grains', 'whole', 'refined', 'dairy', 'protein', 'meats', 'seafood', 'nuts', 'oils', 'discret', 'discretPercent']
const displayNames = ['Vegtables', 'Dark Green Vegetables', 'Red and Orange Vegetables', 'Beans, Peas, and Lentils', 'Starchy Vegetables', 'Other Vegetables',
    'Fruit', 'Grains', 'Whole Grains', 'Refined Grains', 'Dairy', 'Protein Foods', 'Meats, Poultry, and Eggs', 'Seafood (Low in Mercury)', 'Nuts, Seeds, and Soy Products', 'Oils', 'Limit on Calories for Other Uses', 'Limit on Calories for Other Uses (%)']
export const foodGroupToDisplayName = {}
foodGroups.forEach((group, i) => foodGroupToDisplayName[group] = displayNames[i])

// Food groups whose quantities are given in daily (as opposed to weekly) amounts
const dailyFoodGroups = new Set(['veg', 'fruit', 'grains', 'dairy', 'protein', 'oils', 'discret', 'discretPercent'])

export const getReq = (calNeeds) => {
    return foodGroups.map((foodGroup, i) => ({ group: foodGroup, req: dailyFoodGroups.has(foodGroup) ? us[calNeeds][i] : us[calNeeds][i] / 7 }))
}

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