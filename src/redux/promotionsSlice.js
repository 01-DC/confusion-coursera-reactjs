import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { baseUrl } from "../data/baseUrl"

export const fetchPromotions = createAsyncThunk(
	"promotions/fetchPromotions",
	async () => {
		const response = await fetch(baseUrl + "promotions")
		if (response.ok) return response.json()
		else return Promise.reject(`${response.status}: ${response.statusText}`)
	}
)

export const promotionsSlice = createSlice({
	name: "promotions",
	initialState: {
		promotions: [],
		errMess: null,
		isLoading: true,
	},
	reducers: {},
	extraReducers: {
		[fetchPromotions.pending]: (state, action) => {
			console.log("Fetching promotions")
		},
		[fetchPromotions.fulfilled]: (state, action) => {
			console.log("Fetch Successful.")
			return {
				...state,
				promotions: action.payload,
				isLoading: false,
				errMess: null,
			}
		},
		[fetchPromotions.rejected]: (state, action) => {
			console.log("Fetch failed.")
			return {
				...state,
				isLoading: false,
				errMess: action.error.message,
				promotions: [],
			}
		},
	},
})

export default promotionsSlice.reducer
