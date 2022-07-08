import { createSlice } from "@reduxjs/toolkit"

import { PROMOTIONS } from "../data/promotions"

export const promotionsSlice = createSlice({
	name: "promotions",
	initialState: {
		promotions: PROMOTIONS,
	},
	reducers: {},
})

export default promotionsSlice.reducer
