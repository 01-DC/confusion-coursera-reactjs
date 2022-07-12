import React from "react"
import { useSelector } from "react-redux"
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
} from "reactstrap"
import { baseUrl } from "../data/baseUrl"

import Loader from "./Loader"

function RenderCard({ item, itemType }) {
	const { isLoading, errMess } = !!itemType
		? useSelector((state) => state[itemType])
		: {}

	if (isLoading) return <Loader />

	if (errMess) return <h4>{errMess}</h4>

	return (
		<Card>
			<CardImg src={baseUrl + item.image} alt={item.name} />
			<CardBody>
				<CardTitle>{item.name}</CardTitle>
				{"designation" in item ? (
					<CardSubtitle>{item.designation}</CardSubtitle>
				) : null}
				<CardText>{item.description}</CardText>
			</CardBody>
		</Card>
	)
}

const Home = ({ dish, promotion, leader }) => {
	return (
		<div className="container">
			<div className="row align-items-start">
				<div className="col-12 col-md m-1">
					<RenderCard item={dish} itemType="dishes" />
				</div>
				<div className="col-12 col-md m-1">
					<RenderCard item={promotion} itemType="promotions" />
				</div>
				<div className="col-12 col-md m-1">
					<RenderCard item={leader} itemType="leaders" />
				</div>
			</div>
		</div>
	)
}

export default Home
