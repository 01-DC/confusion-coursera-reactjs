import { createSlice } from "@reduxjs/toolkit"

import { DISHES } from "../data/dishes"

export const dishesSlice = createSlice({
	name: "dishes",
	initialState: {
		isLoading: true,
		errMess: null,
		dishes: [],
	},
	reducers: {
		dishesLoading: (state, action) => {
			state.isLoading = true
			state.errMess = null
			state.dishes = []
		},
		dishesFailed: (state, action) => {
			state.isLoading = false
			state.errMess = action.payload
			state.dishes = []
		},
		addDishes: (state, action) => {
			state.isLoading = false
			state.errMess = null
			state.dishes = action.payload
		},
	},
})

export const fetchDishes = () => async (dispatch, getState) => {
	dispatch(dishesLoading(true))
	setTimeout(() => {
		dispatch(addDishes(DISHES))
	}, 2000)
}

export const { addDishes, dishesLoading, dishesFailed } = dishesSlice.actions
export default dishesSlice.reducer
