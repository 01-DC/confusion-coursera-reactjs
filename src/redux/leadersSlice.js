import { createSlice } from "@reduxjs/toolkit"

import { LEADERS } from "../data/leaders"

export const leadersSlice = createSlice({
	name: "leaders",
	initialState: {
		leaders: LEADERS,
	},
	reducers: {},
})

export default leadersSlice.reducer
