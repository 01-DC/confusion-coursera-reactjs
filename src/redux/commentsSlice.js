import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { baseUrl } from "../data/baseUrl"

export const fetchComments = createAsyncThunk(
	"comments/fetchComments",
	async () => {
		const response = await fetch(baseUrl + "comments")
		if (response.ok) return response.json()
		else return Promise.reject(`${response.status}: ${response.statusText}`)
	}
)

export const postComment = createAsyncThunk(
	"comments/postComment",
	async (arg, { getState }) => {
		const comment = {
			...arg,
			id: getState().comments.length,
			date: new Date().toISOString(),
		}
		const response = await fetch(baseUrl + "comments", {
			method: "POST",
			body: JSON.stringify(comment),
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "same-origin",
		})
		if (response.ok) return response.json()
		else return Promise.reject(`${response.status}: ${response.statusText}`)
	}
)

export const commentsSlice = createSlice({
	name: "comments",
	initialState: {
		comments: [],
		errMess: null,
	},
	reducers: {
		addComment: (state, action) => {
			state.comments.push({
				...action.payload,
				id: state.comments.length,
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
		[postComment.pending]: (state, action) => {
			console.log("Posting comment")
		},
		[postComment.fulfilled]: (state, action) => {
			console.log("Post Successful.")
			state.errMess = null
			state.comments.push(action.payload)
		},
		[postComment.rejected]: (state, action) => {
			console.log("Post failed.")
			return {
				...state,
				errMess: action.payload,
			}
		},
	},
})

export const { addComment } = commentsSlice.actions
export default commentsSlice.reducer
