import { createSlice } from "@reduxjs/toolkit"

import { DISHES } from "../data/dishes"

export const dishesSlice = createSlice({
	name: "dishes",
	initialState: {
		dishes: DISHES,
	},
	reducers: {},
})

export default dishesSlice.reducer
