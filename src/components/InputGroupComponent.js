import React from "react";
import { InputGroup, InputGroupText } from "reactstrap";
import { InputText } from "./InputText";
import { InputSelect } from "./InputSelect";
import { InputCheckbox } from "./InputCheckbox";

const errorMessage = "El texto introducido no tiene 3 caracteres";
const errorTelephone = "Solo puede ser un número de al menos 3 caracteres";
const errorEmail = "El email no está bien introducido";
const errorBirthday = "La fecha no está bien introducida";

const InputGroupComponent = (props) => {
	return (
		<InputGroup>
			<InputGroupText className="d-flex flex-column">
				<InputText
					placeholder="nombre"
					className="mt-2"
					handleInputChange={props.handleInputChange}
					errorMessage={errorMessage}
					errorControl={props.errorControlName}
				/>
				<InputText
					placeholder="apellidos"
					className="mt-2"
					handleInputChange={props.handleInputChange}
					errorMessage={errorMessage}
					errorControl={props.errorControlSurname}
				/>
				<InputSelect
					errorMessage={errorBirthday}
					errorControl={props.errorControlBirthDay}
					handleInputChange={props.handleInputChange}
				/>
				<InputCheckbox
					handleInputChange={props.handleInputChange}
					errorControlGender={props.errorControlGender}
				/>
				<InputText
					placeholder="email"
					className="mt-2"
					handleInputChange={props.handleInputChange}
					errorMessage={errorEmail}
					errorControl={props.errorControlEmail}
				/>
				<InputText
					placeholder="telefono"
					className="mt-2"
					handleInputChange={props.handleInputChange}
					errorMessage={errorTelephone}
					errorControl={props.errorControlTelephone}
				/>
			</InputGroupText>
		</InputGroup>
	);
};

export { InputGroupComponent };
