import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { baseUrl } from "../data/baseUrl"

export const postFeedback = createAsyncThunk(
	"feedback/postFeedback",
	async (arg) => {
		const response = await fetch(baseUrl + "feedback", {
			method: "POST",
			body: JSON.stringify(arg),
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
		})
		if (response.ok) return response.json()
		else return Promise.reject(`${response.status}: ${response.statusText}`)
	}
)

export const feedbackSlice = createSlice({
	name: "feedback",
	initialState: {
		feedback: {},
		errMess: null,
	},
	reducers: {},
	extraReducers: {
		[postFeedback.pending]: (state, action) => {
			console.log("Posting feedback")
		},
		[postFeedback.fulfilled]: (state, action) => {
			console.log("Post Successful.")
			state.errMess = null
			state.feedback = action.payload
			console.log(state.feedback)
		},
		[postFeedback.rejected]: (state, action) => {
			console.log("Post failed.")
			return {
				...state,
				errMess: action.error.message,
			}
		},
	},
})

export default feedbackSlice.reducer
