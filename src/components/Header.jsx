import React, { useState, useRef } from "react"
import { NavLink } from "react-router-dom"

import {
	Navbar,
	NavbarBrand,
	Jumbotron,
	Nav,
	NavbarToggler,
	Collapse,
	NavItem,
	Modal,
	Button,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Input,
	Label,
} from "reactstrap"

import logo from "../assets/logo.png"

const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)

	const username = useRef(null)
	const password = useRef(null)
	const remember = useRef(null)

	function handleLogin(e) {
		e.preventDefault()
		setIsModalOpen(!isModalOpen)
		alert(
			"Username: " +
				username.current.value +
				" Password: " +
				password.current.value +
				" Remember: " +
				remember.current.checked
		)
	}
	return (
		<>
			<Navbar dark expand="md">
				<div className="container">
					<NavbarToggler onClick={() => setIsNavOpen(!isNavOpen)} />
					<NavbarBrand className="mr-auto" href="/">
						<img
							src={logo}
							height="30"
							width="41"
							alt="Ristorante Con Fusion"
						/>
					</NavbarBrand>

					<Collapse isOpen={isNavOpen} navbar>
						<Nav navbar>
							<NavItem>
								<NavLink className="nav-link" to="/home">
									<span className="fa fa-home fa-lg"></span>{" "}
									Home
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="nav-link" to="/aboutus">
									<span className="fa fa-info fa-lg"></span>{" "}
									About Us
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="nav-link" to="/menu">
									<span className="fa fa-list fa-lg"></span>{" "}
									Menu
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="nav-link" to="/contactus">
									<span className="fa fa-address-card fa-lg"></span>{" "}
									Contact Us
								</NavLink>
							</NavItem>
						</Nav>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<Button
									outline
									onClick={() =>
										setIsModalOpen(!isModalOpen)
									}>
									<span className="fa fa-sign-in fa-lg">
										Login
									</span>
								</Button>
							</NavItem>
						</Nav>
					</Collapse>
				</div>
			</Navbar>
			<Jumbotron>
				<div className="container">
					<div className="row row-header">
						<div className="col-12 col-sm-6">
							<h1>Ristorante Con Fusion</h1>
							<p>
								We take inspiration from the world's best
								cuisines, and create a unique fusion experience.
								Our lipsmacking creations will tickle your
								culinary senses!
							</p>
						</div>
					</div>
				</div>
			</Jumbotron>
			<Modal
				isOpen={isModalOpen}
				toggle={() => setIsModalOpen(!isModalOpen)}>
				<ModalHeader>Login</ModalHeader>
				<ModalBody>
					<Form onSubmit={(e) => handleLogin(e)}>
						<FormGroup>
							<Label htmlFor="username">Username</Label>
							<Input
								type="text"
								id="username"
								name="username"
								innerRef={username}
							/>
						</FormGroup>
						<FormGroup>
							<Label htmlFor="password">Password</Label>
							<Input
								type="password"
								id="password"
								name="password"
								innerRef={password}
							/>
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input
									type="checkbox"
									name="remember"
									innerRef={remember}
								/>
								Remember Me
							</Label>
						</FormGroup>
						<Button type="submit" value="submit" color="primary">
							Login
						</Button>
					</Form>
				</ModalBody>
			</Modal>
		</>
	)
}

export default Header
