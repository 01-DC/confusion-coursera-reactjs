import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"

import dishesReducer from "./dishesSlice"
import commentsReducer from "./commentsSlice"
import promotionsReducer from "./promotionsSlice"
import leadersReducer from "./leadersSlice"

export default configureStore({
	reducer: {
		dishes: dishesReducer,
		comments: commentsReducer,
		promotions: promotionsReducer,
		leaders: leadersReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
