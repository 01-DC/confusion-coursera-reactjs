import React from "react"
import { Link } from "react-router-dom"

import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from "reactstrap"
import { Formik, ErrorMessage, Form, Field } from "formik"

export default function Contact() {
	function validate(values) {
		const errors = {}
		if (values.firstname && values.firstname.length < 3)
			errors.firstname = "First name should be >= to 3 characters"
		else if (values.firstname && values.firstname.length > 10)
			errors.firstname = "First name should be <= to 10 characters"

		if (values.lastname && values.lastname.length < 3)
			errors.lastname = "Last name should be >= to 3 characters"
		else if (values.lastname && values.lastname.length > 10)
			errors.lastname = "Last name should be <= to 10 characters"

		const reg = /^\d+$/
		if (values.telnum && !reg.test(values.telnum))
			errors.telnum = "Tel. Number should contain only digits."

		if (
			values.email &&
			values.email.split("").filter((x) => x === "@").length !== 1
		)
			errors.email = "Email should contain a @ sign."

		return errors
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
					<Formik
						initialValues={{
							firstname: "",
							lastname: "",
							telnum: "",
							email: "",
							agree: false,
							contactType: "tel",
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
							<Row className="form-group">
								<Label htmlFor="firstname" md={2}>
									First Name
								</Label>
								<Col md={10}>
									<Field
										name="firstname"
										className="form-control"
									/>
									<ErrorMessage
										name="firstname"
										component="div"
									/>
								</Col>
							</Row>

							<Row className="form-group">
								<Label htmlFor="lastname" md={2}>
									Last Name
								</Label>
								<Col md={10}>
									<Field
										name="lastname"
										className="form-control"
									/>
									<ErrorMessage
										name="lastname"
										component="div"
									/>
								</Col>
							</Row>

							<Row className="form-group">
								<Label htmlFor="telnum" md={2}>
									Contact Tel.
								</Label>
								<Col md={10}>
									<Field
										type="tel"
										name="telnum"
										className="form-control"
									/>
									<ErrorMessage
										name="telnum"
										component="div"
									/>
								</Col>
							</Row>

							<Row className="form-group">
								<Label htmlFor="email" md={2}>
									Email
								</Label>
								<Col md={10}>
									<Field
										type="email"
										name="email"
										className="form-control"
									/>
									<ErrorMessage
										name="email"
										component="div"
									/>
								</Col>
							</Row>

							<Row className="form-group">
								<Col md={{ size: 6, offset: 2 }}>
									<div className="form-check">
										<Label check>
											<Field
												type="checkbox"
												name="agree"
												className="form-check-input"
											/>{" "}
											<strong>May we contact you?</strong>
										</Label>
									</div>
								</Col>
								<Col md={{ size: 3, offset: 1 }}>
									<Field
										as="select"
										name="contactType"
										className="form-control">
										<option value="tel">Tel.</option>
										<option value="email">Email</option>
									</Field>
								</Col>
							</Row>

							<Row className="form-group">
								<Label htmlFor="message" md={2}>
									Your Feedback
								</Label>
								<Col md={10}>
									<Field
										as="textarea"
										name="message"
										rows="4"
										className="form-control"
									/>
								</Col>
							</Row>

							<Row className="form-group">
								<Col md={{ size: 10, offset: 2 }}>
									<Button type="submit" color="primary">
										Send Feedback
									</Button>
								</Col>
							</Row>
						</Form>
					</Formik>
				</div>
			</div>
		</div>
	)
}
