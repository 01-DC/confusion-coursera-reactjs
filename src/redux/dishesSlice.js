import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { baseUrl } from "../data/baseUrl"

export const fetchDishes = createAsyncThunk("dishes/fetchDishes", async () => {
	const response = await fetch(baseUrl + "dishes")
	return response.json()
})

export const dishesSlice = createSlice({
	name: "dishes",
	initialState: {
		isLoading: true,
		errMess: null,
		dishes: [],
	},
	reducers: {},
	extraReducers: {
		[fetchDishes.pending]: (state, action) => {
			console.log("Fetching dishes")
			return { ...state, isLoading: true, errMess: null, dishes: [] }
		},
		[fetchDishes.fulfilled]: (state, action) => {
			console.log("Fetch Successful.")
			return {
				...state,
				dishes: action.payload,
				isLoading: false,
				errMess: null,
			}
		},
		[fetchDishes.rejected]: (state, action) => {
			console.log("Fetch failed.")
			return {
				...state,
				isLoading: false,
				errMess: action.payload,
				dishes: [],
			}
		},
	},
})

export default dishesSlice.reducer
