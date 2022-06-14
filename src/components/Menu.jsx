import React, { useState } from "react"
import {
	Card,
	CardImg,
	CardImgOverlay,
	CardTitle,
} from "reactstrap"

import DishDetail from "./DishDetail"

const Menu = ({ dishes }) => {
	const [selectedDish, setSelectedDish] = useState(null)

	const menu = dishes.map((dish) => {
		return (
			<div key={dish.id} className="col-12 col-md-5 m-1">
				<Card onClick={() => setSelectedDish(dish)}>
					<CardImg width="100%" src={dish.image} alt={dish.name} />
					<CardImgOverlay>
						<CardTitle>{dish.name}</CardTitle>
					</CardImgOverlay>
				</Card>
			</div>
		)
	})

	return (
		<div className="container">
			<div className="row">{menu}</div>
			{selectedDish != null ? (
				<DishDetail selectedDish={selectedDish} />
			) : (
				<div></div>
			)}
		</div>
	)
}

export default Menu
