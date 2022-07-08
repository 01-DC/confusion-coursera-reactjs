import { createSlice } from "@reduxjs/toolkit"

import { COMMENTS } from "../data/comments"

export const commentsSlice = createSlice({
	name: "comments",
	initialState: {
		comments: COMMENTS,
	},
	reducers: {},
})

export default commentsSlice.reducer
