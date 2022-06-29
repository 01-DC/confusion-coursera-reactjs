import React, { useState } from "react"
import { Route, Routes, useParams } from "react-router-dom"

import { DISHES } from "../data/dishes"
import { COMMENTS } from "../data/comments"
import { LEADERS } from "../data/leaders"
import { PROMOTIONS } from "../data/promotions"

import Home from "./Home"
import Menu from "./Menu"
import DishDetail from "./DishDetail"
import Header from "./Header"
import Footer from "./Footer"
import Contact from "./Contact"
import About from "./About"

function Main() {
	const [dishes, setDishes] = useState(DISHES)
	const [comments, setComments] = useState(COMMENTS)
	const [leaders, setLeaders] = useState(LEADERS)
	const [promotions, setPromotions] = useState(PROMOTIONS)

	const DishWithId = () => {
		const { dishId } = useParams()
		return (
			<DishDetail
				selectedDish={dishes.filter((dish) => dish.id == dishId)[0]}
				comments={comments.filter(
					(comment) => comment.dishId == dishId
				)}
			/>
		)
	}

	return (
		<div>
			<Header />
			<Routes>
				<Route
					path="/home"
					element={
						<Home
							dish={dishes.filter((dish) => dish.featured)[0]}
							promotion={
								promotions.filter((promo) => promo.featured)[0]
							}
							leader={
								leaders.filter((leader) => leader.featured)[0]
							}
						/>
					}
				/>
				<Route exact path="/menu" element={<Menu dishes={dishes} />} />
				<Route path="/menu/:dishId" element={<DishWithId />} />
				<Route path="/aboutus" element={<About leaders={leaders} />} />
				<Route exact path="/contactus" element={<Contact />} />
				<Route path="*" element={<Home />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default Main
