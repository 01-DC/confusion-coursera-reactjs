import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { baseUrl } from "../data/baseUrl"

export const fetchComments = createAsyncThunk(
	"comments/fetchComments",
	async () => {
		const response = await fetch(baseUrl + "comments")
		return response.json()
	}
)

export const commentsSlice = createSlice({
	name: "comments",
	initialState: {
		comments: [],
		errMess: null
	},
	reducers: {
		addComment: (state, action) => {
			state.comments.push({
				id: state.comments.length,
				dishId: action.payload.dishId,
				rating: action.payload.rating,
				comment: action.payload.comment,
				author: action.payload.author,
				date: new Date().toISOString(),
			})
		},
	},
	extraReducers: {
		[fetchComments.pending]: (state, action) => {
			console.log("Fetching comments")
		},
		[fetchComments.fulfilled]: (state, action) => {
			console.log("Fetch Successful.")
			return {
				...state,
				comments: action.payload,
				errMess: null,
			}
		},
		[fetchComments.rejected]: (state, action) => {
			console.log("Fetch failed.")
			return {
				...state,
				errMess: action.payload,
				comments: [],
			}
		},
	},
})

export const { addComment } = commentsSlice.actions
export default commentsSlice.reducer
