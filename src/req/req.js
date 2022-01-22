import { foodGroups } from "../foodData/foodData";

const req_major_food_groups_veg = [3.5, 2, 9.5, 3, 4.5, 34]
const req_major_food_groups_us = [3.5, 2, 9, 3, 6.5, 34]
const req_all_food_groups_us = [2.5, 7, 2.5, 7, 5.5, 2, 4.5, 4.5, 3, 31, 10, 5]
export const req = foodGroups.map((foodGroup, i) => ({ group: foodGroup, req: req_all_food_groups_us[i] }))
