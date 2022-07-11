import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

import {
	Card,
	CardImg,
	CardImgOverlay,
	CardTitle,
	Breadcrumb,
	BreadcrumbItem,
} from "reactstrap"

import Loader from "./Loader"

const Menu = ({ dishes }) => {
	const { isLoading, errMess } = useSelector((state) => state.dishes)

	const menu = dishes.map((dish) => {
		return (
			<div key={dish.id} className="col-12 col-md-5 m-1">
				<Card>
					<Link to={`/menu/${dish.id}`}>
						<CardImg
							width="100%"
							src={dish.image}
							alt={dish.name}
						/>
						<CardImgOverlay>
							<CardTitle>{dish.name}</CardTitle>
						</CardImgOverlay>
					</Link>
				</Card>
			</div>
		)
	})

	if (isLoading)
		return (
			<div className="container">
				<div className="row">
					<Loader />
				</div>
			</div>
		)

	if (errMess)
		return (
			<div className="container">
				<div className="row">{errMess}</div>
			</div>
		)

	return (
		<div className="container">
			<div className="row">
				<Breadcrumb>
					<BreadcrumbItem>
						<Link to="/home">Home</Link>
					</BreadcrumbItem>
					<BreadcrumbItem active>Menu</BreadcrumbItem>
				</Breadcrumb>
				<div className="col-12">
					<h3>Menu</h3>
					<hr />
				</div>
			</div>
			<div className="row">{menu}</div>
		</div>
	)
}

export default Menu
