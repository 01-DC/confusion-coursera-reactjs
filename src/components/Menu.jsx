import React, { useState } from "react"
import {
	Card,
	CardImg,
	CardImgOverlay,
	CardText,
	CardBody,
	CardTitle,
} from "reactstrap"

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
				<div className="row">
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
			) : (
				<div></div>
			)}
		</div>
	)
}

export default Menu
