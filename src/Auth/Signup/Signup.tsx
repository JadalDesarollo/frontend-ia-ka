import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Card, CardBody, Col, Input, InputGroup, Label, Row } from 'reactstrap';
import logo from "../../assets/images/pattern/login.jpg";
import { useAuthContext } from '../context/authContext';


const Register03 = () => {
	const navigate = useNavigate()
	const { loginSucess, register } = useAuthContext();
	const [messageError, setMessageError] = useState("")
	const [formRegister, setformRegister] = useState({
		username: "",
		correo: "",
		password: ""
	})

	const onchangeForm = (e: any) => {
		setMessageError("")
		setformRegister({
			...formRegister,
			[e.target.name]: e.target.value
		})
	}

	const RegisterCheck = async () => {
		if (formRegister.correo.trim() == "" || formRegister.password.trim() == "" || formRegister.username.trim() == "") {
			setMessageError("Formulario incompleto")
			setformRegister({
				username: '',
				correo: '',
				password: ''
			})
			return
		}
		const success = await register(formRegister.username, formRegister.correo, formRegister.password)
		if (success.status) {
			return navigate('/auth/login')
		}
		setMessageError(success.error)
		setformRegister({
			username: '',
			correo: '',
			password: ''
		})

	}
	useEffect(() => {
		changePrimaryColor("#6e9baa")
	});
	function changePrimaryColor(value: string) {
		var userColor: string = value

		localStorage.setItem("dashticPrimaryColor", userColor);
		// to store value as opacity 0.95 we use 95
		localStorage.setItem("dashticprimaryHoverColor", userColor + 95);
		localStorage.setItem("dashticprimaryBorderColor", userColor);
		localStorage.setItem("dashticprimaryTransparent", userColor + 20);
		let html = document.querySelector("html")?.style;
		html?.setProperty(
			"--primary-bg-color",
			userColor
		);
		html?.setProperty(
			"--primary-bg-hover",
			userColor + 95
		);
		html?.setProperty(
			"--primary-bg-border",
			userColor
		);


	}
	document.querySelector("body")?.classList.add("main-body", "light-mode", "ltr", "page-style1", "error-page");
	document.querySelector("body")?.classList.remove("app", "sidebar-mini");
	const swichermainright = () => {
		document.querySelector(".demo_changer")?.classList.toggle("active");
		let demo_changer = document.querySelector(".demo_changer") as HTMLElement
		demo_changer.style.right = "0px";
	};
	const switcherIconReomve = () => {
		document.querySelector(".demo_changer")?.classList.remove("active");
		let demo_changer1 = document.querySelector(".demo_changer") as HTMLElement
		demo_changer1.style.right = "-270px";
	};
	return (
		<div>
			<div className="page">
				<div className="page-single p-5">
					<div className="header-setting-icon">
						<Link className="demo-icon nav-link p-0 m-2 " to="#" onClick={() => swichermainright()}>
							<svg className="header-icon fa-spin" x="1008" y="1248" viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" focusable="false">
								<path opacity=".3" d="M19.28,8.6 L18.58,7.39 L17.31,7.9 L16.25,8.33 L15.34,7.63 C14.95,7.33 14.54,7.09 14.11,6.92 L13.05,6.49 L12.89,5.36 L12.7,4 L11.3,4 L11.11,5.35 L10.95,6.48 L9.89,6.92 C9.48,7.09 9.07,7.33 8.64,7.65 L7.74,8.33 L6.69,7.91 L5.42,7.39 L4.72,8.6 L5.8,9.44 L6.69,10.14 L6.55,11.27 C6.52,11.57 6.5,11.8 6.5,12 C6.5,12.2 6.52,12.43 6.55,12.73 L6.69,13.86 L5.8,14.56 L4.72,15.4 L5.42,16.61 L6.69,16.1 L7.75,15.67 L8.66,16.37 C9.05,16.67 9.46,16.91 9.89,17.08 L10.95,17.51 L11.11,18.64 L11.3,20 L12.69,20 L12.88,18.65 L13.04,17.52 L14.1,17.09 C14.51,16.92 14.92,16.68 15.35,16.36 L16.25,15.68 L17.29,16.1 L18.56,16.61 L19.26,15.4 L18.18,14.56 L17.29,13.86 L17.43,12.73 C17.47,12.42 17.48,12.21 17.48,12 C17.48,11.79 17.46,11.57 17.43,11.27 L17.29,10.14 L18.18,9.44 L19.28,8.6 Z M12,16 C9.79,16 8,14.21 8,12 C8,9.79 9.79,8 12,8 C14.21,8 16,9.79 16,12 C16,14.21 14.21,16 12,16 Z"></path>
								<path d="M19.43,12.98 C19.47,12.66 19.5,12.34 19.5,12 C19.5,11.66 19.47,11.34 19.43,11.02 L21.54,9.37 C21.73,9.22 21.78,8.95 21.66,8.73 L19.66,5.27 C19.57,5.11 19.4,5.02 19.22,5.02 C19.16,5.02 19.1,5.03 19.05,5.05 L16.56,6.05 C16.04,5.65 15.48,5.32 14.87,5.07 L14.49,2.42 C14.46,2.18 14.25,2 14,2 L10,2 C9.75,2 9.54,2.18 9.51,2.42 L9.13,5.07 C8.52,5.32 7.96,5.66 7.44,6.05 L4.95,5.05 C4.89,5.03 4.83,5.02 4.77,5.02 C4.6,5.02 4.43,5.11 4.34,5.27 L2.34,8.73 C2.21,8.95 2.27,9.22 2.46,9.37 L4.57,11.02 C4.53,11.34 4.5,11.67 4.5,12 C4.5,12.33 4.53,12.66 4.57,12.98 L2.46,14.63 C2.27,14.78 2.22,15.05 2.34,15.27 L4.34,18.73 C4.43,18.89 4.6,18.98 4.78,18.98 C4.84,18.98 4.9,18.97 4.95,18.95 L7.44,17.95 C7.96,18.35 8.52,18.68 9.13,18.93 L9.51,21.58 C9.54,21.82 9.75,22 10,22 L14,22 C14.25,22 14.46,21.82 14.49,21.58 L14.87,18.93 C15.48,18.68 16.04,18.34 16.56,17.95 L19.05,18.95 C19.11,18.97 19.17,18.98 19.23,18.98 C19.4,18.98 19.57,18.89 19.66,18.73 L21.66,15.27 C21.78,15.05 21.73,14.78 21.54,14.63 L19.43,12.98 Z M17.45,11.27 C17.49,11.58 17.5,11.79 17.5,12 C17.5,12.21 17.48,12.43 17.45,12.73 L17.31,13.86 L18.2,14.56 L19.28,15.4 L18.58,16.61 L17.31,16.1 L16.27,15.68 L15.37,16.36 C14.94,16.68 14.53,16.92 14.12,17.09 L13.06,17.52 L12.9,18.65 L12.7,20 L11.3,20 L11.11,18.65 L10.95,17.52 L9.89,17.09 C9.46,16.91 9.06,16.68 8.66,16.38 L7.75,15.68 L6.69,16.11 L5.42,16.62 L4.72,15.41 L5.8,14.57 L6.69,13.87 L6.55,12.74 C6.52,12.43 6.5,12.2 6.5,12 C6.5,11.8 6.52,11.57 6.55,11.27 L6.69,10.14 L5.8,9.44 L4.72,8.6 L5.42,7.39 L6.69,7.9 L7.73,8.32 L8.63,7.64 C9.06,7.32 9.47,7.08 9.88,6.91 L10.94,6.48 L11.1,5.35 L11.3,4 L12.69,4 L12.88,5.35 L13.04,6.48 L14.1,6.91 C14.53,7.09 14.93,7.32 15.33,7.62 L16.24,8.32 L17.3,7.89 L18.57,7.38 L19.27,8.59 L18.2,9.44 L17.31,10.14 L17.45,11.27 Z M12,8 C9.79,8 8,9.79 8,12 C8,14.21 9.79,16 12,16 C14.21,16 16,14.21 16,12 C16,9.79 14.21,8 12,8 Z M12,14 C10.9,14 10,13.1 10,12 C10,10.9 10.9,10 12,10 C13.1,10 14,10.9 14,12 C14,13.1 13.1,14 12,14 Z"	></path>
							</svg>
						</Link>
					</div>
					<Row className=" justify-content-center mt-7 mt-sm-0" onClick={() => { switcherIconReomve() }}>
						<Col xxl={8} lg={9}>
							<div className="card-group mb-0" >
								<Card className=" p-4 page-content" >
									<CardBody className=" page-single-content">
										<div className="w-100">
											<h1 className="mb-2">Registro</h1>
											<p className="text-muted">Crear una nueva cuenta</p>
											{
												messageError != "" &&
												(
													<p style={{
														color: "red"
													}}>{messageError}</p>
												)
											}

											{/* <div className="btn-list d-xl-flex">
												<a href="https://www.google.com/gmail/" target="_blank" className="btn btn-danger btn-w-lg d-block">Google</a>
												<a href="https://twitter.com/" target="_blank" className="btn btn-info d-xl-inline d-block">Twitter</a>
												<a href="https://www.facebook.com/" target="_blank" className="btn btn-primary d-xl-inline d-block me-2">Facebook</a>
											</div> */}
											<hr />
											<InputGroup className="input-group mb-3">
												<span className="input-group-addon"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z" opacity=".3" /><circle cx="12" cy="8" opacity=".3" r="2" /><path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" /></svg></span>
												<Input type="text" className="form-control" placeholder="usuario"
													value={formRegister.username}
													onChange={onchangeForm}
													name="username"
												/>
											</InputGroup>
											<InputGroup className="input-group mb-4">
												<span className="input-group-addon"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z" opacity=".3" /><path d="M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z" /></svg></span>
												<Input type="text" className="form-control"
													name="correo"
													value={formRegister.correo}
													onChange={onchangeForm}
													placeholder="correo" />
											</InputGroup>
											<InputGroup className="input-group mb-4">
												<span className="input-group-addon"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><g fill="none"><path d="M0 0h24v24H0V0z" /><path d="M0 0h24v24H0V0z" opacity=".87" /></g><path d="M6 20h12V10H6v10zm6-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" opacity=".3" /><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" /></svg></span>

												<Input type="password" className="form-control" placeholder="contraseña"
													value={formRegister.password}
													onChange={onchangeForm}
													name="password"
												/>
											</InputGroup>
											<div className="mb-3">
												<Label className="custom-control custom-checkbox">
													<Input type="checkbox" className="custom-control-input" />
													<span className="custom-control-label">Acepto los<Link to={`${import.meta.env.BASE_URL}Auth/Signup/Signup`} className="btn-link"> términos y la políticas</Link></span>
												</Label>
											</div>
											<Row className="row">
												<Col className="col-12">
													<a role="button"
														onClick={() => {
															RegisterCheck()
														}}
														className="btn btn-lg btn-primary btn-block">Crear cuenta <i className="fe fe-arrow-right"></i></a>
												</Col>

											</Row>
										</div>
									</CardBody>
								</Card>
								<Card className=" text-white bg-primary py-5 d-none d-lg-block page-content mt-0">
									<CardBody className=" text-center justify-content-center page-single-content">
										<img src={logo} alt="img" />
									</CardBody>
								</Card>
							</div>
							<div className="text-center pt-4">
								<div className="font-weight-normal fs-16">Ya tienes una cuenta <Link className="btn-link font-weight-normal" to={`${import.meta.env.BASE_URL}auth/login`}>Iniciar sesión aqui</Link></div>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</div>
	);
}
Register03.propTypes = {};

Register03.defaultProps = {};

export default Register03;
