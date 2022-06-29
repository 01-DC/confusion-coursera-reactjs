import React from "react"
import { Link } from "react-router-dom"

import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Breadcrumb,
	BreadcrumbItem,
} from "reactstrap"

const DishDetail = ({ selectedDish, comments }) => {
	return (
		<div className="container">
			<div className="row">
				<Breadcrumb>
					<BreadcrumbItem>
						<Link to="/menu">Menu</Link>
					</BreadcrumbItem>
					<BreadcrumbItem active>{selectedDish.name}</BreadcrumbItem>
				</Breadcrumb>
				<div className="col-12">
					<h3>{selectedDish.name}</h3>
					<hr />
				</div>
			</div>
			<div className="row">
				<div className="col-12 col-md-5 m-1">
					<Card>
						<CardImg
							width="100%"
							src={selectedDish.image}
							alt={selectedDish.name}
						/>
						<CardBody>
							<CardTitle>{selectedDish.name}</CardTitle>
							<CardText>{selectedDish.description}</CardText>
						</CardBody>
					</Card>
				</div>
				<div className="col-12 col-md-5 m-1">
					<h4>Comments</h4>
					{comments.map((comment) => {
						return (
							<div key={comment.id} className="my-2">
								<p>{comment.comment}</p>
								<p>
									{"-- "}
									{comment.author}
									{" , "}
									{new Date(comment.date).toLocaleDateString(
										"en-US",
										{
											year: "numeric",
											month: "short",
											day: "numeric",
										}
									)}
								</p>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default DishDetail
