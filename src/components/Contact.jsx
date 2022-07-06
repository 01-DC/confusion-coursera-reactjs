import React from "react"
import { Link } from "react-router-dom"

import { Breadcrumb, BreadcrumbItem, Button, Label, Col } from "reactstrap"
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
		if (!reg.test(values.telnum))
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
							<div className="row">
								<Label htmlFor="firstname" md={2}>
									First Name
								</Label>
								<Col md={10}>
									<Field name="firstname" />
									<ErrorMessage
										name="firstname"
										component="div"
									/>
								</Col>
							</div>
							<div className="row">
								<Label htmlFor="lastname" md={2}>
									Last Name
								</Label>
								<Col md={10}>
									<Field name="lastname" />
									<ErrorMessage
										name="lastname"
										component="div"
									/>
								</Col>
							</div>
							<div className="row">
								<Label htmlFor="telnum" md={2}>
									Contact Tel.
								</Label>
								<Col md={10}>
									<Field type="tel" name="telnum" />
									<ErrorMessage
										name="telnum"
										component="div"
									/>
								</Col>
							</div>
							<div className="row">
								<Label htmlFor="email" md={2}>
									Email
								</Label>
								<Col md={10}>
									<Field type="email" name="email" />
									<ErrorMessage
										name="email"
										component="div"
									/>
								</Col>
							</div>
							<div className="row">
								<Col md={{ size: 6, offset: 2 }}>
									<Label check>
										<Field type="checkbox" name="agree" />{" "}
										<strong>May we contact you?</strong>
									</Label>
								</Col>
								<Col md={{ size: 3, offset: 1 }}>
									<Field as="select" name="contactType">
										<option value="tel">Tel.</option>
										<option value="email">Email</option>
									</Field>
								</Col>
							</div>
							<div className="row">
								<Label htmlFor="message" md={2}>
									Your Feedback
								</Label>
								<Col md={10}>
									<Field
										as="textarea"
										name="message"
										rows="4"
									/>
								</Col>
							</div>
							<div className="row">
								<Col md={{ size: 10, offset: 2 }}>
									<Button type="submit" color="primary">
										Send Feedback
									</Button>
								</Col>
							</div>
						</Form>
					</Formik>
				</div>
			</div>
		</div>
	)
}
