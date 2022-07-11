import React, { useEffect } from "react"
import { Route, Routes, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { fetchDishes } from "../redux/dishesSlice"

import Home from "./Home"
import Menu from "./Menu"
import DishDetail from "./DishDetail"
import Header from "./Header"
import Footer from "./Footer"
import Contact from "./Contact"
import About from "./About"

function Main() {
	const dishes = useSelector((state) => state.dishes.dishes)
	const comments = useSelector((state) => state.comments.comments)
	const promotions = useSelector((state) => state.promotions.promotions)
	const leaders = useSelector((state) => state.leaders.leaders)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchDishes())
	}, [])

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
				<Route
					path="*"
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
			</Routes>
			<Footer />
		</div>
	)
}

export default Main
