import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { baseUrl } from "../data/baseUrl"

export const fetchLeaders = createAsyncThunk(
	"leaders/fetchLeaders",
	async () => {
		const response = await fetch(baseUrl + "leaders")
		if (response.ok) return response.json()
		else return Promise.reject(`${response.status}: ${response.statusText}`)
	}
)

export const leadersSlice = createSlice({
	name: "leaders",
	initialState: {
		leaders: [],
		isLoading: true,
		errMess: null,
	},
	reducers: {},
	extraReducers: {
		[fetchLeaders.pending]: (state, action) => {
			console.log("Fetching leaders")
			return { ...state, isLoading: true, errMess: null, leaders: [] }
		},
		[fetchLeaders.fulfilled]: (state, action) => {
			console.log("Fetch Successful.")
			return {
				...state,
				leaders: action.payload,
				isLoading: false,
				errMess: null,
			}
		},
		[fetchLeaders.rejected]: (state, action) => {
			console.log("Fetch failed.")
			return {
				...state,
				isLoading: false,
				errMess: action.error.message,
				leaders: [],
			}
		},
	},
})

export default leadersSlice.reducer
