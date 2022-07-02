import React, { useState } from "react"
import { Link } from "react-router-dom"

import {
	Breadcrumb,
	BreadcrumbItem,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	Col,
} from "reactstrap"

export default function Contact() {
	const [formState, setFormState] = useState({
		firstname: "",
		lastname: "",
		telnum: "",
		email: "",
		agree: false,
		contactType: "Tel.",
		message: "",
	})

	function handleInputChange(e) {
		const target = e.target
		const value = target.type === "checkbox" ? target.checked : target.value
		const name = target.name
		setFormState({
			...formState,
			[name]: value,
		})
	}

	function handleSubmit(e) {
		e.preventDefault()
		console.log("Current state is: " + JSON.stringify(formState))
	}
	return (
		<div className="container">
			<div className="row">
				<Breadcrumb>
					<BreadcrumbItem>
						<Link to="/home">Home</Link>
					</BreadcrumbItem>
					<BreadcrumbItem active>Contact Us</BreadcrumbItem>
				</Breadcrumb>
				<div className="col-12">
					<h3>Contact Us</h3>
					<hr />
				</div>
			</div>
			<div className="row row-content">
				<div className="col-12">
					<h3>Location Information</h3>
				</div>
				<div className="col-12 col-sm-4 offset-sm-1">
					<h5>Our Address</h5>
					<address>
						121, Clear Water Bay Road
						<br />
						Clear Water Bay, Kowloon
						<br />
						HONG KONG
						<br />
						<i className="fa fa-phone"></i>: +852 1234 5678
						<br />
						<i className="fa fa-fax"></i>: +852 8765 4321
						<br />
						<i className="fa fa-envelope"></i>:{" "}
						<a href="mailto:confusion@food.net">
							confusion@food.net
						</a>
					</address>
				</div>
				<div className="col-12 col-sm-6 offset-sm-1">
					<h5>Map of our Location</h5>
				</div>
				<div className="col-12 col-sm-11 offset-sm-1">
					<div className="btn-group" role="group">
						<a
							role="button"
							className="btn btn-primary"
							href="tel:+85212345678">
							<i className="fa fa-phone"></i> Call
						</a>
						<a role="button" className="btn btn-info">
							<i className="fa fa-skype"></i> Skype
						</a>
						<a
							role="button"
							className="btn btn-success"
							href="mailto:confusion@food.net">
							<i className="fa fa-envelope-o"></i> Email
						</a>
					</div>
				</div>
			</div>
			<div className="row row-content">
				<div className="col-12">
					<h3>Send us Your Feedback</h3>
				</div>
				<div className="col-12 col-md-9">
					<Form onSubmit={(e) => handleSubmit(e)}>
						<FormGroup row>
							<Label htmlFor="firstname" md={2}>
								First Name
							</Label>
							<Col md={10}>
								<Input
									type="text"
									id="firstname"
									name="firstname"
									placeholder="First Name"
									onChange={(e) => handleInputChange(e)}
									value={formState.firstname}
								/>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Label htmlFor="lastname" md={2}>
								Last Name
							</Label>
							<Col md={10}>
								<Input
									type="text"
									id="lastname"
									name="lastname"
									placeholder="Last Name"
									onChange={(e) => handleInputChange(e)}
									value={formState.lastname}
								/>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Label htmlFor="telnum" md={2}>
								Contact Tel.
							</Label>
							<Col md={10}>
								<Input
									type="tel"
									id="telnum"
									name="telnum"
									placeholder="Tel. Number"
									onChange={(e) => handleInputChange(e)}
									value={formState.telnum}
								/>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Label htmlFor="email" md={2}>
								Email
							</Label>
							<Col md={10}>
								<Input
									type="email"
									id="email"
									name="email"
									placeholder="Email"
									onChange={(e) => handleInputChange(e)}
									value={formState.email}
								/>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Col md={{ size: 6, offset: 2 }}>
								<FormGroup check>
									<Label check>
										<Input
											type="checkbox"
											name="agree"
											onChange={(e) =>
												handleInputChange(e)
											}
											checked={formState.agree}
										/>{" "}
										<strong>May we contact you?</strong>
									</Label>
								</FormGroup>
							</Col>
							<Col md={{ size: 3, offset: 1 }}>
								<Input
									type="select"
									name="contactType"
									onChange={(e) => handleInputChange(e)}
									value={formState.contactType}>
									<option>Tel.</option>
									<option>Email</option>
								</Input>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Label htmlFor="message" md={2}>
								Your Feedback
							</Label>
							<Col md={10}>
								<Input
									type="textarea"
									id="message"
									name="message"
									rows="12"
									onChange={(e) => handleInputChange(e)}
									value={formState.message}
								/>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Col md={{ size: 10, offset: 2 }}>
								<Button type="submit" color="primary">
									Send Feedback
								</Button>
							</Col>
						</FormGroup>
					</Form>
				</div>
			</div>
		</div>
	)
}
