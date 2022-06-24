import React, { useState } from "react"
import { Route, Routes } from "react-router-dom"

import { DISHES } from "../data/dishes"
import Home from "./Home"
import Menu from "./Menu"
import DishDetail from "./DishDetail"
import Header from "./Header"
import Footer from "./Footer"

function Main() {
	const [dishes, setDishes] = useState(DISHES)

	return (
		<div>
			<Header />
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route exact path="/menu" element={<Menu dishes={dishes} />} />
				<Route path="*" element={<Home />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default Main
