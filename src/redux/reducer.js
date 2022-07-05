import { createSlice } from "@reduxjs/toolkit"

import { DISHES } from "../data/dishes"
import { COMMENTS } from "../data/comments"
import { LEADERS } from "../data/leaders"
import { PROMOTIONS } from "../data/promotions"

const initialState = {
	dishes: DISHES,
	comments: COMMENTS,
	promotions: PROMOTIONS,
	leaders: LEADERS,
}

export const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {},
})

export const {} = dataSlice.actions
export default dataSlice.reducer
