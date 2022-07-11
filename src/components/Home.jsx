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

import Loader from "./Loader"

function RenderCard({ item, isLoading, errMess }) {
	if (isLoading) return <Loader />

	if (errMess) return <h4>{errMess}</h4>

	return (
		<Card>
			<CardImg src={item.image} alt={item.name} />
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
	const { isLoading, errMess } = useSelector((state) => state.dishes)

	return (
		<div className="container">
			<div className="row align-items-start">
				<div className="col-12 col-md m-1">
					<RenderCard
						item={dish}
						isLoading={isLoading}
						errMess={errMess}
					/>
				</div>
				<div className="col-12 col-md m-1">
					<RenderCard item={promotion} />
				</div>
				<div className="col-12 col-md m-1">
					<RenderCard item={leader} />
				</div>
			</div>
		</div>
	)
}

export default Home
