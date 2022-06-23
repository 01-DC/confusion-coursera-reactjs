import React, { useState } from "react"

import { DISHES } from "../data/dishes"
import Menu from "./Menu"
import DishDetail from "./DishDetail"
import Header from "./Header"
import Footer from "./Footer"

function Main() {
	const [dishes, setDishes] = useState(DISHES)
	const [selectedDish, setSelectedDish] = useState(null)

	return (
		<div>
			<Header />
			<Menu
				dishes={dishes}
				onClick={(dishId) => setSelectedDish(dishId)}
			/>
			{selectedDish != null ? (
				<DishDetail
					selectedDish={
						dishes.filter((dish) => dish.id == selectedDish)[0]
					}
				/>
			) : (
				<div></div>
			)}
			<Footer />
		</div>
	)
}

export default Main
