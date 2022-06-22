import React from "react"
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap"

const DishDetail = ({ selectedDish }) => {
	return (
		<div className="container">
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
					{selectedDish.comments.map((comment) => {
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
