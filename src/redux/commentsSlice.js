import { createSlice } from "@reduxjs/toolkit"

import { COMMENTS } from "../data/comments"

export const commentsSlice = createSlice({
	name: "comments",
	initialState: {
		comments: COMMENTS,
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
})

export const { addComment } = commentsSlice.actions
export default commentsSlice.reducer
