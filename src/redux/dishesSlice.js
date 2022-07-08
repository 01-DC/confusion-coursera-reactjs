import { createSlice } from "@reduxjs/toolkit"

import { DISHES } from "../data/dishes"

export const dishesSlice = createSlice({
	name: "dishes",
	initialState: {
		dishes: DISHES,
	},
	reducers: {
		dishesLoading: (state, action) => {},
		dishesFailed: (state, action) => {},
		addDishes: (state, action) => {},
	},
})

export default dishesSlice.reducer
