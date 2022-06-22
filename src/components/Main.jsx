import React, { useState } from "react"
import { Navbar, NavbarBrand } from "reactstrap"

import { DISHES } from "../data/dishes"
import Menu from "./Menu"
import DishDetail from "./DishDetail"

function Main() {
	const [dishes, setDishes] = useState(DISHES)
	const [selectedDish, setSelectedDish] = useState(null)

	return (
		<div>
			<Navbar dark color="primary">
				<div className="container">
					<NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
				</div>
			</Navbar>
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
		</div>
	)
}

export default Main
