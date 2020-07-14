import React, { useState, useEffect } from "react";
import "./App.css";
import { Container, Col, Row } from "reactstrap";
import { InputGroupComponent } from "./components/InputGroupComponent";
import ButtonSignUp from "./components/ButtonSignUp";
import { checkErrors } from "./aux-functions/checkErrors";

function App() {
	const [inputName, setInputName] = useState("");
	const [inputSurname, setInputSurname] = useState("");
	const [inputEmail, setInputEmail] = useState("");
	const [inputTelephone, setInputTelephone] = useState("");
	const [inputGender, setInputGender] = useState("");
	const [inputBirthDay, setInputBirthDay] = useState({});
	const [errorControlName, setErrorControlName] = useState(false);
	const [errorControlSurname, setErrorControlSurname] = useState(false);
	const [errorControlEmail, setErrorControlEmail] = useState(false);
	const [errorControlTelephone, setErrorControlTelephone] = useState(false);
	const [errorControlGender, setErrorControlGender] = useState(false);
	const [errorControlBirthDay, setErrorControlBirthDay] = useState(false);
	const [errorSubmit, setErrorSubmit] = useState(false);

	const handleInputChange = (event) => {
		const element = event.target.placeholder;
		if (element === "nombre") {
			setInputName(event.target.value);
		}
		if (element === "apellidos") {
			setInputSurname(event.target.value);
		}
		if (element === "email") {
			setInputEmail(event.target.value);
		}
		if (element === "telefono") {
			setInputTelephone(event.target.value);
		}
		if (event.target.id.includes("gender")) {
			setInputGender(event.target.value);
		}
		if (event.target.id === "year") {
			console.log(event.target.value);
			setInputBirthDay({ ...inputBirthDay, year: event.target.value });
		}
		if (event.target.id === "month") {
			console.log(event.target.value);
			setInputBirthDay({ ...inputBirthDay, month: event.target.value });
		}
		if (event.target.id === "day") {
			console.log(event.target.value);
			setInputBirthDay({ ...inputBirthDay, day: event.target.value });
		}
	};

	const handleButtonClick = () => {
		const errors = checkErrors(
			errorControlName,
			errorControlSurname,
			errorControlEmail,
			errorControlTelephone,
			errorControlGender,
			errorControlBirthDay
		);
		if (errors) {
			setErrorSubmit(true);
		} else setErrorSubmit(false);
	};

	useEffect(() => {
		if (inputName.length < 3) {
			setErrorControlName(true);
		} else setErrorControlName(false);
	}, [inputName]);

	useEffect(() => {
		if (inputSurname.length < 3) {
			setErrorControlSurname(true);
		} else setErrorControlSurname(false);
	}, [inputSurname]);

	useEffect(() => {
		if (inputEmail.length < 3) {
			setErrorControlEmail(true);
		} else setErrorControlEmail(false);
	}, [inputEmail]);

	useEffect(() => {
		if (inputTelephone.length < 3) {
			setErrorControlTelephone(true);
		} else setErrorControlTelephone(false);
	}, [inputTelephone]);

	useEffect(() => {
		if (inputGender.length === 0) {
			setErrorControlGender(true);
		} else setErrorControlGender(false);
	}, [inputGender]);

	useEffect(() => {
		if (Object.values(inputBirthDay).length < 3) {
			setErrorControlBirthDay(true);
		} else setErrorControlBirthDay(false);
	}, [inputBirthDay]);

	useEffect(() => {
		setErrorControlName(false);
		setErrorControlSurname(false);
		setErrorControlEmail(false);
		setErrorControlTelephone(false);
		setErrorControlBirthDay(false);
	}, []);

	return (
		<div className="App">
			<Container className="d-flex justify-content-center">
				<Row className="mt-5">
					<Col xs="12" className="mt-5 border bg-light p-3">
						<InputGroupComponent
							errorControlName={errorControlName}
							errorControlSurname={errorControlSurname}
							errorControlEmail={errorControlEmail}
							errorControlTelephone={errorControlTelephone}
							errorControlGender={errorControlGender}
							errorControlBirthDay={errorControlBirthDay}
							handleInputChange={handleInputChange}
						/>
						<ButtonSignUp handleButtonClick={handleButtonClick} />
						{errorSubmit && (
							<div>
								<label className="text-danger">Parametros sin introducir</label>
							</div>
						)}
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
