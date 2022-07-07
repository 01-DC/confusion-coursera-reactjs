import React, { useState } from "react"
import { Link } from "react-router-dom"

import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Breadcrumb,
	BreadcrumbItem,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Label,
} from "reactstrap"
import { Formik, ErrorMessage, Form, Field } from "formik"

const DishDetail = ({ selectedDish, comments }) => {
	const [showModal, setShowModal] = useState(false)

	function validate(values) {
		const errors = {}
		if (values.name && values.name.length < 3)
			errors.name = "Name should be >= to 3 characters"
		else if (values.name && values.name.length > 30)
			errors.name = "Name should be <= to 30 characters"

		return errors
	}

	return (
		<div className="container">
			<div className="row">
				<Breadcrumb>
					<BreadcrumbItem>
						<Link to="/home">Home</Link>
					</BreadcrumbItem>
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
					<Button
						outline
						color="secondary"
						onClick={() => setShowModal(!showModal)}>
						<span className="fa fa-pencil"></span> Submit Comment
					</Button>
				</div>
			</div>
			<Modal
				scrollable
				isOpen={showModal}
				toggle={() => setShowModal(!showModal)}>
				<ModalHeader toggle={() => setShowModal(!showModal)}>
					Submit Comment
				</ModalHeader>
				<ModalBody>
					<Formik
						initialValues={{
							rating: "1",
							name: "",
							message: "",
						}}
						validate={validate}
						onSubmit={(values, actions) => {
							console.log(
								"Current state is: " + JSON.stringify(values)
							)
							actions.setSubmitting(false)
						}}>
						<Form>
							<Label htmlFor="rating">Rating</Label>
							<Field
								type="number"
								name="rating"
								min="0"
								max="5"
								className="form-control"
							/>
							<Label htmlFor="name">Name</Label>
							<Field name="name" className="form-control" />
							<ErrorMessage
								name="name"
								component="div"
								className="text-danger"
							/>

							<Label htmlFor="message">Comment</Label>
							<Field
								as="textarea"
								name="message"
								rows="4"
								className="form-control"
							/>

							<Button
								type="submit"
								color="primary"
								onClick={() => setShowModal(!showModal)}>
								Submit
							</Button>
						</Form>
					</Formik>
				</ModalBody>
			</Modal>
		</div>
	)
}

export default DishDetail
